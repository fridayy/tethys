package ninja.harmless.tethys.metric.exception;

/**
 * @author bnjm@harmless.ninja - 1/31/17.
 */
public class InvalidPhantomasUrlException extends RuntimeException {
    public InvalidPhantomasUrlException() {
        super();
    }

    public InvalidPhantomasUrlException(String message) {
        super(message);
    }

    public InvalidPhantomasUrlException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidPhantomasUrlException(Throwable cause) {
        super(cause);
    }

    protected InvalidPhantomasUrlException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
