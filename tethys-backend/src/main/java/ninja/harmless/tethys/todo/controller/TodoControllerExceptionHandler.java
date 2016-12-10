package ninja.harmless.tethys.todo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * ExceptionHandler for {@link TodoController}
 * @author bnjm@harmless.ninja - 12/10/16.
 */
@ControllerAdvice
class TodoControllerExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public void handleMissingParameterException() {
        // Returns HTTP 400
    }
}
