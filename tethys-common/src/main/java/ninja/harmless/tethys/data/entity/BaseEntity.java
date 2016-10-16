package ninja.harmless.tethys.data.entity;

import ninja.harmless.tethys.data.annotation.MongoDTO;
import org.springframework.data.annotation.Id;

/**
 * A simple entity class which has some common properties.
 *
 * @author bnjm@harmless.ninja - 10/17/16.
 */
@MongoDTO
public abstract class BaseEntity {
    @Id
    private String id;

    public BaseEntity(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
