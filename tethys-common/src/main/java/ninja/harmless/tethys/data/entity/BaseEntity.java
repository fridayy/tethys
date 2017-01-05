package ninja.harmless.tethys.data.entity;

import ninja.harmless.tethys.data.annotation.MongoDTO;
import org.springframework.data.annotation.Id;

import java.util.Objects;

/**
 * A simple entity class which has some common properties.
 *
 * @author bnjm@harmless.ninja - 10/17/16.
 */
@MongoDTO
public class BaseEntity {
    @Id
    private String id;

    public BaseEntity() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BaseEntity that = (BaseEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


    public String toJsonString() {
        return "{ \"id\" : \""+ this.id+ "\"}";
    }
}
