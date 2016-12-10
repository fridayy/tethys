package ninja.harmless.tethys.todo.model;

import org.springframework.hateoas.ResourceSupport;

/**
 * Todo REST resource used for Spring HATEOAS
 *
 * @author bnjm@harmless.ninja - 12/10/16.
 */
public class TodoResource extends ResourceSupport {
    private String resourceId;
    private String title;
    private String description;

    public TodoResource(String resourceId, String title, String description) {
        this.resourceId = resourceId;
        this.title = title;
        this.description = description;
    }

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
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
