package ninja.harmless.tethys.todo.repository;

import ninja.harmless.tethys.todo.model.Todo;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Document(collection = "todo")
public interface TodoRepository extends MongoRepository<Todo, String> {
    Todo findByTitle(String title);

    @Query(value = "{'isDone' : true}",count = true)
    int countMarkedDone();
}
