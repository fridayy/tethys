package ninja.harmless.tethys.todo.model

import org.springframework.hateoas.ResourceSupport

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class TodoStatisticResource extends ResourceSupport {

    TodoStatisticResource(Integer totalTodos, Integer markedDone, Integer openTodos, Double percentageDone) {
        this.totalTodos = totalTodos
        this.markedDone = markedDone
        this.openTodos = openTodos
        this.percentageDone = percentageDone
    }

    Integer totalTodos
    Integer markedDone
    Integer openTodos
    Double percentageDone
}
