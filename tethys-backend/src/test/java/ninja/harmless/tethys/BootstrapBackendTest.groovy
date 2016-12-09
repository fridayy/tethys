package ninja.harmless.tethys

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import spock.lang.Specification
/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@SpringBootTest
class BootstrapBackendTest extends Specification {

    @Autowired
    ApplicationContext ctx

    void "Spring context loads"() {
        expect:
            ctx != null
    }
}
