package ninja.harmless.tethys.configuration

import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import org.springframework.core.env.Environment
import org.springframework.test.context.ActiveProfiles
import spock.lang.Specification
/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@SpringBootTest
@ActiveProfiles(value = "dev")
class FongoConfigurationTest extends Specification {

    @Autowired
    Environment environment

    @Autowired
    ApplicationContext ctx

    @Autowired
    TodoRepository repository


    void "Fongo is used"() {
        expect:
            environment.getProperty("spring.data.mongodb.host") == null
            ctx.getBean(FongoConfiguration.class) != null
    }

    void "Objects can be saved and retrieved"() {
        given:
            Todo expectation = new Todo(id: "1")
        when:
            repository.save(expectation)
            def result = repository.findOne("1")
        then:
            result.id == expectation.id
    }
}
