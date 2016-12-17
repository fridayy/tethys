package ninja.harmless.tethys.todo.service;

import ninja.harmless.tethys.todo.controller.TodoStatisticController;
import ninja.harmless.tethys.todo.model.TodoStatistic;
import ninja.harmless.tethys.todo.model.TodoStatisticResource;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

/**
 * Converts a Todo DTO into a TodoResource used for Spring HATEOAS
 *
 * @author bnjm@harmless.ninja - 12/10/16.
 */
@Component
public class TodoStatisticAssembler extends ResourceAssemblerSupport<TodoStatistic, TodoStatisticResource>{


    /**
     * Creates a new {@link ResourceAssemblerSupport} using the given controller class and resource type.
     */
    public TodoStatisticAssembler() {
        super(TodoStatisticController.class, TodoStatisticResource.class);
    }

    @Override
    public TodoStatisticResource toResource(TodoStatistic entity) {
        return new TodoStatisticResource(entity.getStatistic());
    }
}
