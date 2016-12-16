package ninja.harmless.tethys.todo.controller;

import ninja.harmless.tethys.todo.exception.DuplicatedResourceException;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public @ResponseBody String handleWrongParamterException(Exception e)  {
        return "{ \"message\": \""+ e.getMessage() +"\"}";
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DuplicatedResourceException.class)
    public void handleDuplicatedResourceException() {
        // Returns HTTP 409 Conflict
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public @ResponseBody String handleHttpMessageNotReadableException() {
        return "{ \"message\" : \"Required request body is missing\"}";
    }
}
