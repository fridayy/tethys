package ninja.harmless.tethys.aop.logging;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * This logging aspect is used to fight cross cutting concerns.
 * Logs exceptions within methods if the method is annotated with{@link EnableExceptionLogging}
 *
 * @author bnjm@harmless.ninja - 10/13/16.
 */
@Aspect
@Component
public class LoggingAspect {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Pointcut("@annotation(ninja.harmless.tethys.aop.logging.EnableExceptionLogging) && execution(* * (..))")
    public void annotationPointcut() {
    }

    @AfterThrowing(pointcut = "annotationPointcut()", throwing = "e")
    public void logExceptionAfterThrowing(JoinPoint jp, Throwable e) {
        logger.error("{} in {}.{}() thrown. Cause: {}. ",
                e.getMessage(), jp.getSignature().getDeclaringTypeName(),
                jp.getSignature().getName(),
                e.getCause(), e);
    }
}
