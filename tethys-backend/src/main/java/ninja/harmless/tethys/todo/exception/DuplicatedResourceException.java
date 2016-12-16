package ninja.harmless.tethys.todo.exception;

/**
 * @author bnjm@harmless.ninja - 12/16/16.
 */
public class DuplicatedResourceException extends RuntimeException {
    public DuplicatedResourceException() {
        super();
    }

    public DuplicatedResourceException(String message) {
        super(message);
    }

    public DuplicatedResourceException(String message, Throwable cause) {
        super(message, cause);
    }

    public DuplicatedResourceException(Throwable cause) {
        super(cause);
    }

    protected DuplicatedResourceException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
