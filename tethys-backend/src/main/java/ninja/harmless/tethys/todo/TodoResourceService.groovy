package ninja.harmless.tethys.todo

import ninja.harmless.tethys.hateoas.CustomPagedResources
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
interface TodoResourceService {
    TodoResource add(Todo todo)
    TodoResource update(Todo todo)
    CustomPagedResources<TodoResource> get(int page, int size)
    TodoResource getById(String id)
    void delete(String id)
    void delete(Collection<TodoResource> items)
}