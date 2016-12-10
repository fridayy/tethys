package ninja.harmless.tethys.todo.service

import io.jsonwebtoken.lang.Assert
import ninja.harmless.tethys.todo.TodoResourceService
import ninja.harmless.tethys.todo.controller.TodoController
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.PagedResources
import org.springframework.stereotype.Component

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn
/**
 * Provides TodoResources for the TodoController
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Component
class TodoResourceServiceImpl implements TodoResourceService {

    TodoRepository repository
    PagedResourcesAssembler<Todo> pagedResourcesAssembler
    TodoResourceAssembler todoResourceAssembler

    @Autowired
    TodoResourceServiceImpl(TodoRepository repository,
                            PagedResourcesAssembler<Todo> pagedResourcesAssembler,
                            TodoResourceAssembler todoResourceAssembler) {
        this.repository = repository
        this.pagedResourcesAssembler = pagedResourcesAssembler
        this.todoResourceAssembler = todoResourceAssembler
    }


    @Override
    PagedResources<TodoResource> getPagedResource(int page, int limit) {
        Assert.notNull(page, "Page must not be null.")
        Assert.notNull(limit, "Limit must not be null.")
        Page<Todo> todoPage = repository.findAll(new PageRequest(page, limit))

        return pagedResourcesAssembler.toResource(todoPage, todoResourceAssembler)

    }

    @Override
    TodoResource getResourceById(String id) {
        Assert.notNull(id, "Id must not be null")
        Todo todo = repository.findOne(id)
        TodoResource todoResource = todoResourceAssembler.toResource(todo)
        todoResource.add(linkTo(methodOn(TodoController.class).getTodoResourceById(id)).withSelfRel())
        return todoResource
    }
}
