package ninja.harmless.tethys.todo.model

import org.springframework.hateoas.ResourceSupport

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class TodoStatisticResource extends ResourceSupport {

    TodoStatisticResource(Statistic statistic) {
        this.statistic = statistic
    }

    Statistic statistic
}
