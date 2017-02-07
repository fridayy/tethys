package ninja.harmless.tethys.configuration

import ninja.harmless.tethys.collection.ImmutableList
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.apache.commons.lang3.RandomUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Conditional
import org.springframework.stereotype.Component

import javax.annotation.PostConstruct
/**
 * Post construction this bean will populate the fongo in memory db
 * with random data for testing purposes.
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Component
@Conditional(MongoDBNotPresentCondition.class)
class FongoImporterBean {

    @Autowired
    TodoRepository repository

    @Value('${tethys.fongo.numberOfDatasets}')
    Integer numberOfDatasets

    @PostConstruct
    void importDataIntoFongo() {
        repository.save(generateTodos(0, numberOfDatasets))
    }


    void importAdditionalData(int count) {
        repository.insert(generateTodos(repository.findAll().size(), count))
    }

    List<Todo> generateTodos(int start, int count) {
        List<Todo> todoList = []
        (start..<(count + start)).each {
            todoList << generateTodoItem(it)
        }
        return new ImmutableList<Todo>(todoList)
    }


    private Todo generateTodoItem(int count) {
        def pre = ["have to", "must", "should"]
        def verbs = ["buy", "get", "steal", "gather", "code", "eat", "drink", "produce", "cook"]
        def counts = ["some", "many", "one", "two"]
        def when = ["asap", "tomorrow", "soon", "fast", "immediately"]
        def what = ["apples", "java", "groovy", "pineapples", "wine", "beer", "spaghetti"]

        Todo todo = new Todo(generateTitle(verbs, what), generateDescription(pre, verbs, counts, when, what))
        todo.setId(count as String)

        return todo
    }

    private String generateTitle(List<String> verbs, List<String> what) {
        return verbs[RandomUtils.nextInt(0, verbs.size() - 1)] + " " + what[RandomUtils.nextInt(0, what.size())] + "!"
    }

    private String generateDescription(List<String> pre, List<String> verbs, List<String> counts,
                                       List<String> when, List<String> what) {


        StringBuilder sb = new StringBuilder();
        sb.append("I ")
                .append(pre[RandomUtils.nextInt(0, pre.size() - 1)])
                .append(" ")
                .append(verbs[RandomUtils.nextInt(0, verbs.size() - 1)])
                .append(" ")
                .append(what[RandomUtils.nextInt(0, what.size() - 1)])
                .append(" ")
                .append(counts[RandomUtils.nextInt(0, what.size() - 1)])
                .append(" ")
                .append(when[RandomUtils.nextInt(0, when.size() - 1)])
                .append(".")

        return sb.toString()
    }
}
