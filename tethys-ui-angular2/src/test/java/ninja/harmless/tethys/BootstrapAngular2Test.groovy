package ninja.harmless.tethys

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import spock.lang.Specification

/**
 * @author bnjm@harmless.ninja - 1/3/17.
 */
@SpringBootTest
class BootstrapAngular2Test extends Specification {
  @Autowired
  ApplicationContext ctx

  void "BootstrapAngular2 provides an application context"() {
    expect:
      ctx != null
  }
}
