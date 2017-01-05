package ninja.harmless.tethys.todo.service

import ninja.harmless.tethys.test.annotation.UnitTest
import ninja.harmless.tethys.todo.TodoResourceService
import ninja.harmless.tethys.todo.exception.DuplicatedResourceException
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.data.domain.PageImpl
import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.PagedResources
import org.springframework.hateoas.ResourceAssembler
import spock.lang.Specification
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@UnitTest
class TodoResourceServiceTest extends Specification {

    TodoResourceService classUnderTest
    TodoRepository mockedRepository
    PagedResourcesAssembler<Todo> mockedPagedResourcesAssembler
    ResourceAssembler<Todo, TodoResource> mockedTodoResourceAssembler

    void setup() {
        mockedRepository = Mock(TodoRepository)
        mockedPagedResourcesAssembler = new PagedResourcesAssemblerMock<Todo>(null, null)
        mockedTodoResourceAssembler = Mock(ResourceAssembler)
        classUnderTest = new TodoResourceServiceImpl(mockedRepository, mockedPagedResourcesAssembler, mockedTodoResourceAssembler)
    }

    void "getResourceById() should throw ResourceNotFoundException"() {
        when:
            classUnderTest.getById("test")
        then:
            thrown(ResourceNotFoundException)
    }

    void "getResourceById() should throw IllegalArgumentExpection"() {
        when:
            classUnderTest.getById(null)
        then:
            thrown(IllegalArgumentException)
    }


    void "getResourceById() returns a TodoResource"() {
        given:
            mockedRepository.findOne(_) >> new Todo("abc", "abc")
            mockedTodoResourceAssembler.toResource(_) >> new TodoResource()
        when:
            def result = classUnderTest.getById("1")
        then:
            result != null
            result instanceof TodoResource
    }

    void "deleteResourceById() invokes delete on repository"() {
        when:
            classUnderTest.delete("1")
        then:
            1 * mockedRepository.delete(_)
    }

    void "deleteResourceById() throws IllegalArgumentException"() {
        when:
            classUnderTest.delete(null)
        then:
            thrown(IllegalArgumentException)
    }

    void "getPagedResource() returns a PagedResources<>"() {
        given:
            mockedRepository.findAll(_) >> new PageImpl<Todo>([])
        when:
            def result = classUnderTest.get(1,1)
        then:
            1 * mockedRepository.findAll(_)
            result != null
            result instanceof PagedResources<TodoResource>
    }

    void "updateResource() invokes save on repository if a todo can be updated"() {
        given:
            Todo todo = new Todo("test", "test")
            mockedRepository.findByTitle("test") >> todo
        when:
            classUnderTest.update(todo)
        then:
            1 * mockedRepository.save(todo)
    }

    void "updateResource() throws ResourceNotFoundException"() {
        when:
            classUnderTest.update(new Todo("a", "b"))
        then:
            thrown(ResourceNotFoundException)
    }

    void "updateResource() throws IllegalArgumentException"() {
        when:
            classUnderTest.update(null)
        then:
            thrown(IllegalArgumentException)
    }

    void "updateResource() returns a TodoResource"() {
        given:
            Todo todo = new Todo("test", "test")
            mockedRepository.findByTitle("test") >> todo
            TodoResource todoResource = new TodoResource()
            mockedTodoResourceAssembler.toResource(_) >> todoResource
        when:
            def result = classUnderTest.update(todo)
        then:
            result != null
            result instanceof TodoResource
    }

    void "addResource() throws IllegalArgumentException"() {
        when:
            classUnderTest.add(null)
        then:
            thrown(IllegalArgumentException)
    }

    void "addResource() throws DuplicatedResourceException"() {
        given:
            mockedRepository.findByTitle(_) >> new Todo()
        when:
            classUnderTest.add(new Todo())
        then:
            thrown(DuplicatedResourceException)
    }

    void "addResource() invokes save on repository"() {
        given:
            mockedRepository.findByTitle(_) >> null
        when:
            classUnderTest.add(new Todo())
        then:
            1 * mockedRepository.save(_)
    }

    void "addResource() returns a TodoResource when successfull"() {
        given:
            mockedRepository.findByTitle(_) >> null
            mockedTodoResourceAssembler.toResource(_) >> new TodoResource()
        when:
            def result = classUnderTest.add(new Todo())
        then:
            result != null
            result instanceof TodoResource
    }
}
