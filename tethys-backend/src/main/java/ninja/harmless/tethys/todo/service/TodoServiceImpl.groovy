package ninja.harmless.tethys.todo.service

import groovy.transform.TypeChecked
import io.jsonwebtoken.lang.Assert
import ninja.harmless.tethys.todo.TodoService
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Component

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Component
@TypeChecked
class TodoServiceImpl implements TodoService {

    TodoRepository repository

    @Autowired
    TodoServiceImpl(TodoRepository repository) {
        this.repository = repository
    }

    @Override
    Page<Todo> getPage(String page, String size) {
        Assert.notNull(page, "Page cannot be null.")
        Assert.notNull(size, "Size cannot be null.")

        return repository.findAll(new PageRequest(page as Integer, size as Integer))
    }
}
