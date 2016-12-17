package ninja.harmless.tethys.todo.service

import ninja.harmless.tethys.test.annotation.UnitTest
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import spock.lang.Specification

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@UnitTest
class TodoResourceAssemblerTest extends Specification {

    TodoResourceAssembler classUnderTest

    void setup() {
        classUnderTest = new TodoResourceAssembler()
    }

    void "TodoResource gets correctly assembled from Todo"() {
        given:
            Todo todo = new Todo("test", "test")
        when:
            TodoResource result = classUnderTest.toResource(todo)
        then:
            result.description == todo.description
            result.title == todo.title
    }
}
