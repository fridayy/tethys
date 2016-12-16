package ninja.harmless.tethys.todo.controller;

import ninja.harmless.tethys.todo.TodoResourceService;
import ninja.harmless.tethys.todo.model.Todo;
import ninja.harmless.tethys.todo.model.TodoResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
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
     * Throws {@link ResourceNotFoundException} to delegate the request to {@link TodoControllerExceptionHandler}
     */
    @RequestMapping(value = "/todo", method = RequestMethod.GET)
    public void emptyTodoRequest() {
        throw new ResourceNotFoundException();
    }

    /**
     * Returns a TodoResource by id
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/todo/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TodoResource> getTodoResourceById(@PathVariable String id) {
        TodoResource r = todoService.getResourceById(id);

        return new ResponseEntity<>(r, HttpStatus.OK);
    }

    /**
     * Deletes a TodoResource with the given id
     */
    @RequestMapping(value = "/todo/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteTodoResourceById(@PathVariable String id) {
        todoService.deleteResourceById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Adds a new TodoResource entry
     * @param todo
     * @return the created resource
     */
    @RequestMapping(value = "/todo", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TodoResource> createTodoResource(@RequestBody Todo todo) {
        TodoResource todoResource = todoService.addResource(todo);

        return new ResponseEntity<>(todoResource, HttpStatus.CREATED);
    }

    /**
     * Updates a given resource
     * @param todo
     * @return the updated resource
     */
    @RequestMapping(value = "/todo", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateTodoResource(@RequestBody Todo todo) {
        TodoResource todoResource = todoService.upateResource(todo);
        return new ResponseEntity<>(todoResource, HttpStatus.OK);
    }
}
