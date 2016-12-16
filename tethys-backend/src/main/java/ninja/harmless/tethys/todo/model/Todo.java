package ninja.harmless.tethys.todo.model;

import ninja.harmless.tethys.data.annotation.MongoDTO;
import ninja.harmless.tethys.data.entity.BaseEntity;

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
@MongoDTO
public class Todo extends BaseEntity {
    private String title;
    private String description;

    public Todo(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public Todo() {

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
