package ninja.harmless.tethys.data.entity;

import java.util.Objects;

/**
 * @author bnjm@harmless.ninja - 10/17/16.
 */
public class ValueObject {

    private String value;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ValueObject that = (ValueObject) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
