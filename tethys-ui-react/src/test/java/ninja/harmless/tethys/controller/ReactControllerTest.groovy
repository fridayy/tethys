package ninja.harmless.tethys.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@SpringBootTest
@AutoConfigureMockMvc
class ReactControllerTest extends Specification {
    @Autowired
    MockMvc mockMvc

    void "React front-end gets provided"() {
        expect:
            mockMvc.perform(get("/")).andExpect(status().isOk())
    }
}
