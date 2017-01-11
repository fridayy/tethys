package ninja.harmless.tethys.todo.service.mocks;

import ninja.harmless.tethys.todo.model.Todo;
import ninja.harmless.tethys.todo.model.TodoResource;
import ninja.harmless.tethys.todo.service.TodoResourceAssembler;

/**
 * @author bnjm@harmless.ninja - 1/11/17.
 */
public class TodoResourceAssemblerMock extends TodoResourceAssembler {
    public TodoResourceAssemblerMock() {
        super();
    }

    @Override
    public TodoResource toResource(Todo entity) {
        return new TodoResource();
    }

    @Override
    public Todo fromResource(TodoResource resource) {
        return new Todo();
    }
}
