package ninja.harmless.tethys.metric.controller;

import ninja.harmless.tethys.metric.exception.InvalidPhantomasUrlException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author bnjm@harmless.ninja - 1/31/17.
 */
@ControllerAdvice
public class MetricControllerExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public @ResponseBody String handleMissingParameterException() {
        return "{ \"message\" : \"Required request parameter is missing\"}";
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(InvalidPhantomasUrlException.class)
    public @ResponseBody String handleInvalidPhantomasUrlException() {
        return "{ \"message\" : \"Url is not applicable\"}";
    }
}
