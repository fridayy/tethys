package ninja.harmless.tethys.todo.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import spock.lang.Specification
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

    void "Controller is available"() {
        expect:
            mockMvc.perform(MockMvcRequestBuilders.get("/$apiVersion/todos"))
                    .andExpect(MockMvcResultMatchers.status().isOk())

    }
}
