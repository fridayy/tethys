package ninja.harmless.tethys.configuration;

import ninja.harmless.tethys.hateoas.CustomPagedResourceAssembler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author bnjm@harmless.ninja - 1/4/17.
 */
@Configuration
@Import(FongoConfiguration.class)
public class ApplicationContextConfiguration {
    @Bean
    public CustomPagedResourceAssembler customPagedResourceAssembler() {
        return new CustomPagedResourceAssembler(null, null);
    }
}
