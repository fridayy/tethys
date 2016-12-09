package ninja.harmless.tethys.test.annotation;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Meta annotation to identify Spring integration test.
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public @interface IntegrationTest {
}
