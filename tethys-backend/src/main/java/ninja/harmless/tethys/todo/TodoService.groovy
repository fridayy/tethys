package ninja.harmless.tethys.todo

import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource
import org.springframework.data.domain.Page
import org.springframework.hateoas.PagedResources

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
interface TodoService {
    @Deprecated
    Page<Todo> getPage(int page, int size)
    PagedResources<TodoResource> getPagedResource(int page, int limit)
}