package ninja.harmless.tethys.todo.controller

import groovy.transform.TypeChecked
import ninja.harmless.tethys.todo.TodoService
import ninja.harmless.tethys.todo.model.TodoResource
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.hateoas.PagedResources
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

/**
 * REST Controller which provides multiple end points for the front-ends to consume.
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@RestController
@RequestMapping(value = '${tethys.apiVersion}/todo')
@CrossOrigin(origins = ['${tethys.frontend.angularUrl}', '${tethys.frontend.angularUrl}'])
@TypeChecked
class TodoController {

    TodoService todoService


    @Autowired
    TodoController(TodoService todoService) {
        this.todoService = todoService
    }

    /**
     * Returns a paged representation of todoitems limited by @param page.
     *
     * @param page
     * @param limit
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<PagedResources<TodoResource>> getTodoPages(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "limit", defaultValue = "15") int limit) {

        PagedResources<TodoResource> pagedTodoResource = todoService.getPagedResource(page, limit)

        return new ResponseEntity<PagedResources<TodoResource>>(pagedTodoResource, HttpStatus.OK)
    }
}
