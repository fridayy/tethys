package ninja.harmless.tethys.aop.logging

import ninja.harmless.tethys.test.annotation.UnitTest
import org.aspectj.lang.JoinPoint
import org.aspectj.lang.Signature
import org.slf4j.Logger
import spock.lang.Specification

import javax.naming.OperationNotSupportedException
import java.lang.reflect.Field

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@UnitTest
class LoggingAspectTest extends Specification {

    LoggingAspect classUnderTest
    Logger mockedLogger
    JoinPoint mockedJp
    Signature mockedSignature

    void setup() {
        classUnderTest      = new LoggingAspect()
        mockedLogger        = Mock(Logger)
        mockedJp            = Mock(JoinPoint)
        mockedSignature     = Mock(Signature)
        Field loggerField   = classUnderTest.getClass().getDeclaredField("logger")

        loggerField.setAccessible(true)
        loggerField.set(classUnderTest, mockedLogger)

        mockedJp.getSignature() >> mockedSignature
        mockedSignature.getDeclaringTypeName() >> "This is..."
        mockedSignature.getName() >> "..just a test"
    }

    void "Thrown exception gets logged as error"() {
        when:
            classUnderTest.logExceptionAfterThrowing(mockedJp, new OperationNotSupportedException("None"))
        then:
            1 * mockedLogger.error(_,_)
    }
}
