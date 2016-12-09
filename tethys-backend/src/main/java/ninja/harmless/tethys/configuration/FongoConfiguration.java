package ninja.harmless.tethys.configuration;

import com.github.fakemongo.Fongo;
import com.mongodb.Mongo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

/**
 * Configuration which sets an embedded fake mongo db (fongo)
 * as datasource.
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@Configuration
@Conditional(MongoDBNotPresentCondition.class)
public class FongoConfiguration extends AbstractMongoConfiguration {

    @Bean
    public Fongo fongo() {
        return new Fongo("fongo");
    }

    @Override
    protected String getDatabaseName() {
        return "fongo";
    }

    @Override
    public Mongo mongo() throws Exception {
        return fongo().getMongo();
    }
}
