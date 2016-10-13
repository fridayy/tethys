package ninja.harmless.tethys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Bootstraps the React frontend for tethys.
 *
 * @author bnjm@harmless.ninja - 10/13/16.
 */
@SpringBootApplication
public class BootstrapReact {
    public static void main(String[] args) {
        SpringApplication.run(BootstrapReact.class, args);
    }
}
