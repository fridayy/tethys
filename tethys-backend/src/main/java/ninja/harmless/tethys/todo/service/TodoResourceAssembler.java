package ninja.harmless.tethys.todo.service;

import ninja.harmless.tethys.todo.controller.TodoController;
import ninja.harmless.tethys.todo.model.Todo;
import ninja.harmless.tethys.todo.model.TodoResource;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

/**
 * Converts a Todo DTO into a TodoResource used for Spring HATEOAS
 *
 * @author bnjm@harmless.ninja - 12/10/16.
 */
@Component
public class TodoResourceAssembler extends ResourceAssemblerSupport<Todo, TodoResource>{


    /**
     * Creates a new {@link ResourceAssemblerSupport} using the given controller class and resource type.
     */
    public TodoResourceAssembler() {
        super(TodoController.class, TodoResource.class);
    }

    @Override
    public TodoResource toResource(Todo entity) {
        return new TodoResource(entity.getId(), entity.getTitle(),
                                entity.getDescription(), entity.getMarkedDone(),
                                entity.getCreatedAt());
    }
}
