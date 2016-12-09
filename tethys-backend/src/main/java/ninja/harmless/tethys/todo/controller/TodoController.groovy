package ninja.harmless.tethys.todo.controller

import ninja.harmless.tethys.aop.logging.EnableExceptionLogging
import ninja.harmless.tethys.todo.TodoService
import ninja.harmless.tethys.todo.model.Todo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
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
class TodoController {

    TodoService todoService

    @Autowired
    TodoController(TodoService todoService) {
        this.todoService = todoService
    }

    @RequestMapping("/test")
    String test(@RequestParam(value = "test", defaultValue = "0") int a) {
        return "Entered: $a"
    }

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @EnableExceptionLogging
    ResponseEntity<Page<Todo>> getTodoByPage(@RequestParam(value = "page", defaultValue = "0") int page,
                                             @RequestParam(value = "size", defaultValue = "15") int size) {

        return new ResponseEntity<Page<Todo>>(todoService.getPage(page, size), HttpStatus.OK)
    }
}
