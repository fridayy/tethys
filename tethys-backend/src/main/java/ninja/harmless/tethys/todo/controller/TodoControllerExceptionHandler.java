package ninja.harmless.tethys.todo.controller;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

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
    public ModelAndView handleWrongParamterException()  {
        ModelAndView mav = new ModelAndView();
        mav.addObject("errorMessage", "Resource not found.");

        return mav;
    }
}
