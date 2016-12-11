package ninja.harmless.tethys.todo.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification
import spock.lang.Unroll

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(value = "dev")
class TodoControllerTest extends Specification {

    @Autowired
    MockMvc mockMvc

    @Value('${tethys.apiVersion}')
    String apiVersion

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
            mockMvc.perform(get("/$apiVersion/" + endpoint))
            .andExpect(status().isOk())
        where:
            endpoint                || _
            "/todos"                || _
            "/todos?page=0"         || _
            "/todos?page=1&size=10" || _
            "/todo/1"               || _
    }

    void "Accessing /todo without ID paramter returns HTTP 400"() {
        expect:
            mockMvc.perform(get("/$apiVersion/todo")).andExpect(status().isNotFound())
    }

    @Unroll
    void "DELETE Request to #endpoint with valid id returns HTTP 100"() {
        expect:
            mockMvc.perform(delete("/$apiVersion/" + endpoint))
            .andExpect(status().isOk())

        where:
            endpoint || _
            "todo/1" || _
    }
}
