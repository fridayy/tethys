package ninja.harmless.tethys.todo.repository

import ninja.harmless.tethys.todo.model.Todo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import spock.lang.Specification

/**
 * @author bnjm@harmless.ninja - 12/16/16.
 */
@SpringBootTest
@ActiveProfiles(value = "dev")
class TodoRepositoryTest extends Specification {

    @Autowired
    TodoRepository classUnderTest

    void setup() {

    }

    void "findByName returns the correct object"() {
        given:
            Todo expectation = new Todo("test", "this is just a test")
            classUnderTest.save(expectation)
        when:
            def result = classUnderTest.findByTitle("test")
        then:
            result == expectation
    }
}
