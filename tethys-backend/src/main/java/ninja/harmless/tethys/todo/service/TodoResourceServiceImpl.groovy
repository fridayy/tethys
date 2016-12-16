package ninja.harmless.tethys.todo.service

import io.jsonwebtoken.lang.Assert
import ninja.harmless.tethys.aop.logging.EnableExceptionLogging
import ninja.harmless.tethys.todo.TodoResourceService
import ninja.harmless.tethys.todo.controller.TodoController
import ninja.harmless.tethys.todo.exception.DuplicatedResourceException
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.PagedResources
import org.springframework.stereotype.Component

import static ninja.harmless.tethys.hateoas.LinkBuilderAdapter.linkTo
import static ninja.harmless.tethys.hateoas.LinkBuilderAdapter.methodOn
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
    TodoResource addResource(Todo todo) {
        Assert.notNull(todo, "todo object cannot be null")
        if(repository.findByTitle(todo.title) != null) {
            throw new DuplicatedResourceException("wrong HTTP method. Use PUT.")
        } else {
            repository.save(todo)
        }
        return todoResourceAssembler.toResource(todo)
    }

    @Override
    TodoResource upateResource(Todo todo) {
        Assert.notNull(todo, "todo object cannot be null")

        if(repository.findByTitle(todo.title) != null) {
            repository.save(todo)
        } else {
            throw new ResourceNotFoundException("Resource has not been found")
        }
        return todoResourceAssembler.toResource(todo)
    }

    @Override
    PagedResources<TodoResource> getPagedResource(int page, int limit) {
        Assert.notNull(page, "Page must not be null.")
        Assert.notNull(limit, "Limit must not be null.")
        Page<Todo> todoPage = repository.findAll(new PageRequest(page, limit))

        return pagedResourcesAssembler.toResource(todoPage, todoResourceAssembler)

    }

    @Override
    @EnableExceptionLogging
    TodoResource getResourceById(String id) {
        Assert.notNull(id, "Id must not be null")
        Todo todo = repository.findOne(id)

        if(todo == null)
            throw new ResourceNotFoundException("Resource has not been found")

        TodoResource todoResource = todoResourceAssembler.toResource(todo)
        todoResource.add(linkTo(methodOn(TodoController.class).getTodoResourceById(id)).withSelfRel())

        return todoResource
    }

    @Override
    void deleteResourceById(String id) {
        Assert.notNull(id, "Id must not be null")
        repository.delete(id)
    }
}
