package ninja.harmless.tethys.todo.controller

import ninja.harmless.tethys.todo.model.Todo
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultMatcher
import spock.lang.Specification
import spock.lang.Unroll

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
/**
 * TodoController integration test
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(value = "dev")
class TodoControllerTest extends Specification {

    @Autowired
    MockMvc mockMvc

    @Autowired
    TodoRepository todoRepository

    @Value('${tethys.apiVersion}')
    String apiVersion

    Todo todo

    void setup() {
        todo = new Todo("test", "test")
    }

    void "Api version is set"() {
        expect:
            apiVersion != null
    }

    void "Requesting /todos returns HTTP 100"() {
        expect:
            mockMvc.perform(get("/$apiVersion/todos"))
                    .andExpect(status().isOk())

    }

    @Unroll
    void "GET Request to #endpoint returns HTTP 100"() {
        expect:
            ResultMatcher rm = expectation
            mockMvc.perform(get("/$apiVersion/" + endpoint))
            .andExpect(rm)
        where:
            endpoint                || expectation
            "/todos"                || status().isOk()
            "/todos?page=0"         || status().isOk()
            "/todos?page=1&size=10" || status().isOk()
            "/todo/1"               || status().isOk()
    }

    void "Accessing /todo without ID paramter returns HTTP 400"() {
        expect:
            mockMvc.perform(get("/$apiVersion/todo")).andExpect(status().isNotFound())
    }

    @Unroll
    void "DELETE Request to #endpoint with valid id returns HTTP 100"() {
        expect:
            ResultMatcher rm = expectation
            mockMvc.perform(delete("/$apiVersion/" + endpoint))
            .andExpect(rm)

        where:
            endpoint || expectation
            "todo/1" || status().isOk()
    }

    void "DELETE Request to /todos with multiple items deletes those ressources"() {
        given:
            List<Todo> entities = [new Todo(resourceId: "998", title: "a", description: "b"), new Todo(resourceId: "999", title: "c", description: "d")]
            List<String> jsonResources = []
            entities.collect(jsonResources) { it -> it.toJsonString()}
            todoRepository.save(entities)
        when:
            mockMvc.perform(delete("/$apiVersion/todos").contentType(MediaType.APPLICATION_JSON_VALUE).content(jsonResources.toListString())).andExpect(status().isOk())
        then:
            todoRepository.findOne("998") == null
            todoRepository.findOne("999") == null
    }

    @Unroll
    void "POST Request to #endpoint creates new resource"() {
        expect:
            ResultMatcher rm = expectation
            mockMvc.perform(post("/$apiVersion/" + endpoint).contentType(MediaType.APPLICATION_JSON).content(todo.toJsonString()))
            .andExpect(rm)

        where:
            endpoint || expectation
            "todo"   || status().isCreated()
    }


    void "PUT Request updates a resource"() {
        given:
            mockMvc.perform(post("/$apiVersion/todo").contentType(MediaType.APPLICATION_JSON).content(todo.toJsonString()))
        when:
            def result = mockMvc.perform(put("/$apiVersion/todo").contentType(MediaType.APPLICATION_JSON).content(todo.toJsonString()))
        then:
            result.andExpect(status().isOk())
    }
}
