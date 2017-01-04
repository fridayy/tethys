package ninja.harmless.tethys.todo

import ninja.harmless.tethys.hateoas.CustomPagedResources
import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.model.TodoResource

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
interface TodoResourceService {
    TodoResource addResource(Todo todo)
    TodoResource upateResource(Todo todo)
    CustomPagedResources<TodoResource> getPagedResource(int page, int size)
    TodoResource getResourceById(String id)
    void deleteResourceById(String id)
}