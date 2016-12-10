package ninja.harmless.tethys.todo.controller;

import ninja.harmless.tethys.todo.TodoResourceService;
import ninja.harmless.tethys.todo.model.TodoResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
/**
 * REST Controller which provides multiple end points for the front-ends to consume.
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@RestController
@RequestMapping(value = "${tethys.apiVersion}")
@CrossOrigin(origins = {"${tethys.frontend.angularUrl}", "${tethys.frontend.angularUrl}"})
public class TodoController {

    TodoResourceService todoService;


    @Autowired
    TodoController(TodoResourceService todoService) {
        this.todoService = todoService;
    }

    /**
     * Returns a paged representation of TodoResources limited by @param page.
     *
     * @param page
     * @param limit
     * @return
     */
    @RequestMapping(value = "/todos", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PagedResources<TodoResource>> getTodoPages(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "limit", defaultValue = "15") int limit) {

        PagedResources<TodoResource> pagedTodoResource = todoService.getPagedResource(page, limit);

        return new ResponseEntity<>(pagedTodoResource, HttpStatus.OK);
    }

    /**
     * Returns a TodoResource by id
     * @param id
     * @return
     */
    @RequestMapping(value = "/todo", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TodoResource> getTodoResourceById(@RequestParam(value = "id") String id) {
        TodoResource r = todoService.getResourceById(id);

        return new ResponseEntity<>(r, HttpStatus.OK);
    }
}
