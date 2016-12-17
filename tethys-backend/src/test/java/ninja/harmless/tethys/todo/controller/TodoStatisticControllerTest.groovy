package ninja.harmless.tethys.todo.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.ResultMatcher
import spock.lang.Specification
import spock.lang.Unroll

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles(value = "dev")
class TodoStatisticControllerTest extends Specification {

    @Autowired
    MockMvc mockMvc

    @Value('${tethys.apiVersion}')
    String apiVersion


    @Unroll
    void "GET Request to #endpoint returns HTTP OK"() {
        expect:
            ResultMatcher rm = expectation
            mockMvc.perform(get("/$apiVersion/" + endpoint)).andExpect(rm)
        where:
            endpoint         || expectation
            "todo/_stats"    || status().isOk()
            "todo/_cxycs"    || status().isNotFound()
    }
}
