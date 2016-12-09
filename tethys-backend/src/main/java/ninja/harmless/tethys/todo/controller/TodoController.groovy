package ninja.harmless.tethys.todo.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@RestController
@RequestMapping(value = '${tethys.apiVersion}/todo')
@CrossOrigin(origins = ['${tethys.frontend.angularUrl}','${tethys.frontend.angularUrl}'])
class TodoController {

    @RequestMapping
    String hello() {
      return "lol!"
    }
}
