package ninja.harmless.tethys.todo.service

import ninja.harmless.tethys.todo.TodoStatisticService
import ninja.harmless.tethys.todo.model.Statistic
import ninja.harmless.tethys.todo.model.TodoStatistic
import ninja.harmless.tethys.todo.model.TodoStatisticResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.hateoas.ResourceAssembler
import org.springframework.stereotype.Service
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@Service
class TodoStatisticServiceImpl implements TodoStatisticService {

    TodoRepository repository
    ResourceAssembler<TodoStatistic, TodoStatisticResource> todoStatsticAssembler

    @Autowired
    TodoStatisticServiceImpl(TodoRepository repository, ResourceAssembler<TodoStatistic, TodoStatisticResource>  todoStatsticAssembler) {
        this.repository = repository
        this.todoStatsticAssembler = todoStatsticAssembler
    }

    @Override
    TodoStatisticResource provideTotalStatistics() {
        Integer totalTodos = repository.count() as Integer
        Integer markedDone = repository.countMarkedDone()
        Integer openTodos = totalTodos - markedDone
        Double percentageDone = 0
        if(totalTodos > 0) {
            percentageDone = (markedDone / totalTodos) * 100
        }
        Statistic statistic = new Statistic(totalTodos: totalTodos,
                                            markedDone: markedDone,
                                            openTodos: openTodos,
                                            percentageDone: percentageDone)
        return todoStatsticAssembler.toResource(new TodoStatistic(statistic))

    }
}
