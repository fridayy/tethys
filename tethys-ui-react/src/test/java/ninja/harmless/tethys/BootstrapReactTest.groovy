package ninja.harmless.tethys

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import spock.lang.Specification
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@SpringBootTest
class BootstrapReactTest extends Specification {
    @Autowired
    ApplicationContext ctx

    void "BootstrapReact provides an application context"() {
        expect:
            ctx != null
    }
}
