package ninja.harmless.tethys.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
/**
 * @author bnjm@harmless.ninja - 1/3/17.
 */
@SpringBootTest
@AutoConfigureMockMvc
class Angular2ControllerTest extends Specification {
  @Autowired
  MockMvc mockMvc

  void "Angular2 front-end gets provided"() {
    expect:
      mockMvc.perform(get("/")).andExpect(status().isOk())
  }
}
