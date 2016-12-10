package ninja.harmless.tethys.todo.service

import groovy.transform.TypeChecked
import io.jsonwebtoken.lang.Assert
import ninja.harmless.tethys.todo.TodoService
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.PagedResources
import org.springframework.stereotype.Component
/**
 * Provides TodoResources for the TodoController
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Component
@TypeChecked
class TodoServiceImpl implements TodoService {

    TodoRepository repository
    PagedResourcesAssembler<Todo> pagedResourcesAssembler
    TodoResourceAssembler todoResourceAssembler

    @Autowired
    TodoServiceImpl(TodoRepository repository,
                    PagedResourcesAssembler<Todo> pagedResourcesAssembler,
                    TodoResourceAssembler todoResourceAssembler) {
        this.repository = repository
        this.pagedResourcesAssembler = pagedResourcesAssembler
        this.todoResourceAssembler = todoResourceAssembler
    }

    @Override
    Page<Todo> getPage(int page, int size) {
        Assert.notNull(page, "Page cannot be null.")
        Assert.notNull(size, "Size cannot be null.")

        return repository.findAll(new PageRequest(page, size))
    }

    @Override
    PagedResources<TodoResource> getPagedResource(int page, int limit) {
        Assert.notNull(page, "Page must not be null.")
        Assert.notNull(limit, "Limit must not be null.")
        Page<Todo> todoPage = repository.findAll(new PageRequest(page, limit))

        return pagedResourcesAssembler.toResource(todoPage, todoResourceAssembler)

    }
}
