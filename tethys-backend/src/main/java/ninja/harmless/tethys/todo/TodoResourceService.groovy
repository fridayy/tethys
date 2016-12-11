package ninja.harmless.tethys.todo

import ninja.harmless.tethys.todo.model.TodoResource
import org.springframework.hateoas.PagedResources
/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
interface TodoResourceService {

    PagedResources<TodoResource> getPagedResource(int page, int limit)
    TodoResource getResourceById(String id)
    void deleteResourceById(String id)
}