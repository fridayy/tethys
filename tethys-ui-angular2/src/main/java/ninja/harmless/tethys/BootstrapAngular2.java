package ninja.harmless.tethys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Bootstrapping class for Spring Boot serving the Angular 2 front end
 * @author bnjm@harmless.ninja - 10/12/16.
 */
@SpringBootApplication
public class BootstrapAngular2 {
    public static void main(String[] args) {
        SpringApplication.run(BootstrapAngular2.class, args);
    }
}
