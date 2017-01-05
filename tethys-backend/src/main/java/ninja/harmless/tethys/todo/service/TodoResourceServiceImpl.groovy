package ninja.harmless.tethys.todo.service

import io.jsonwebtoken.lang.Assert
import ninja.harmless.tethys.aop.logging.EnableExceptionLogging
import ninja.harmless.tethys.hateoas.CustomPagedResourceAssembler
import ninja.harmless.tethys.hateoas.CustomPagedResources
import ninja.harmless.tethys.todo.TodoResourceService
import ninja.harmless.tethys.todo.exception.DuplicatedResourceException
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.rest.webmvc.ResourceNotFoundException
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.stereotype.Component
/**
 * Provides TodoResources for the TodoController
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Component
class TodoResourceServiceImpl implements TodoResourceService {

    TodoRepository repository
    PagedResourcesAssembler<Todo> pagedResourcesAssembler
    CustomPagedResourceAssembler<Todo> customPagedResourceAssembler
    TodoResourceAssembler todoResourceAssembler


    @Autowired
    TodoResourceServiceImpl(TodoRepository repository,
                            PagedResourcesAssembler<Todo> pagedResourcesAssembler,
                            TodoResourceAssembler todoResourceAssembler,
                            CustomPagedResourceAssembler<Todo> customPagedResourceAssembler) {
        this.repository = repository
        this.pagedResourcesAssembler = pagedResourcesAssembler
        this.todoResourceAssembler = todoResourceAssembler
        this.customPagedResourceAssembler = customPagedResourceAssembler
    }

    @Override
    TodoResource add(Todo todo) {
        Assert.notNull(todo, "todo object cannot be null")
        if(repository.findByTitle(todo.title) != null) {
            throw new DuplicatedResourceException("wrong HTTP method. Use PUT.")
        } else {
            repository.save(todo)
        }
        return todoResourceAssembler.toResource(todo)
    }

    @Override
    TodoResource update(Todo todo) {
        Assert.notNull(todo, "todo object cannot be null")

        if(repository.findByTitle(todo.title) != null) {
            repository.save(todo)
        } else {
            throw new ResourceNotFoundException("Resource has not been found")
        }
        return todoResourceAssembler.toResource(todo)
    }

    @Override
    CustomPagedResources<TodoResource> get(int page, int size) {
        Assert.notNull(page, "Page must not be null.")
        Assert.notNull(size, "Limit must not be null.")
        Page<Todo> todoPage = repository.findAll(new PageRequest(page, size))

        return customPagedResourceAssembler.toResource(todoPage, todoResourceAssembler)
    }

    @Override
    @EnableExceptionLogging
    TodoResource getById(String id) {
        Assert.notNull(id, "Id must not be null")
        Todo todo = repository.findOne(id)

        if(todo == null)
            throw new ResourceNotFoundException("Resource has not been found")

        return todoResourceAssembler.toResource(todo)
    }

    @Override
    void delete(String id) {
        Assert.notNull(id, "Id must not be null")
        repository.delete(id)
    }

    @Override
    void delete(Collection<TodoResource> items) {
        Assert.notNull(items, "Items must not be null")
        Assert.notEmpty(items, "Items cannot be empty")
        def map = items.collect {it -> todoResourceAssembler.fromResource(it)}
        // TODO: Temporary workaround due to a limitation in FONGO
        map.each {
            it -> repository.delete(it.id)
        }
    }
}
