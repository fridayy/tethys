package ninja.harmless.tethys.todo.controller;

import ninja.harmless.tethys.todo.TodoStatisticService;
import ninja.harmless.tethys.todo.model.TodoStatisticResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@RestController
@RequestMapping(value = "${tethys.apiVersion}")
@CrossOrigin(origins = {"${tethys.frontend.angularUrl}", "${tethys.frontend.angularUrl}"})
public class TodoStatisticController {

    private TodoStatisticService todoStatisticService;

    @Autowired
    public TodoStatisticController(TodoStatisticService todoStatisticService) {
        this.todoStatisticService = todoStatisticService;
    }

    @RequestMapping(value = "/todo/stats", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TodoStatisticResource> getStats() {
        TodoStatisticResource todoStatisticResource = todoStatisticService.provideTotalStatistics();

        return new ResponseEntity<>(todoStatisticResource, HttpStatus.OK);
    }
}
