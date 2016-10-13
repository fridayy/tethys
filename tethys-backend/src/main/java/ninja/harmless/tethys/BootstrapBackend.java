package ninja.harmless.tethys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Bootstraps the Spring Boot Backend for Tethys
 *
 * @author bnjm@harmless.ninja - 10/13/16.
 */
@SpringBootApplication
public class BootstrapBackend {
    public static void main(String[] args) {
        SpringApplication.run(BootstrapBackend.class, args);
    }
}
