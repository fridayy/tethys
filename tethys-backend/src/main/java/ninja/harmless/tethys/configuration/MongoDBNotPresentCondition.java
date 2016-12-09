package ninja.harmless.tethys.configuration;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.env.Environment;
import org.springframework.core.type.AnnotatedTypeMetadata;

/**
 * Checks if the spring data mongo property is set in order to
 * determine if fongo should be used or not.
 *
 * @author bnjm@harmless.ninja - 12/9/16.
 */
public class MongoDBNotPresentCondition implements Condition {
    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        Environment environment = context.getEnvironment();
        return !StringUtils.isNotEmpty(environment.getProperty("spring.data.mongodb.host"));
    }
}
