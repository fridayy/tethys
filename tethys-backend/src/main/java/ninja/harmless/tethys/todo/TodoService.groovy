package ninja.harmless.tethys.todo

import ninja.harmless.tethys.todo.model.Todo
import org.springframework.data.domain.Page
/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
interface TodoService {
    Page<Todo> getPage(String page, String size)
}