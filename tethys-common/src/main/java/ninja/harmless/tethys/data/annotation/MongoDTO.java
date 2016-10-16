package ninja.harmless.tethys.data.annotation;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Helper annotation which ensures that unknown properties will be ignored and not serialized.
 *
 * @author bnjm@harmless.ninja - 10/17/16.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@JsonIgnoreProperties(ignoreUnknown = true)
public @interface MongoDTO {
}
