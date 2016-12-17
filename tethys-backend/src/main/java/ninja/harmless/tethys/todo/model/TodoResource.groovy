package ninja.harmless.tethys.todo.model

import org.springframework.hateoas.ResourceSupport

import java.time.LocalDateTime

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class TodoResource extends ResourceSupport {

    TodoResource() {
    }

    TodoResource(String resourceId, String title, String description, Boolean markedDone, LocalDateTime createdAt) {
        this.resourceId = resourceId
        this.title = title
        this.description = description
        this.markedDone = markedDone
        this.createdAt = createdAt
    }
    String resourceId
    String title
    String description
    Boolean markedDone = false
    LocalDateTime createdAt = LocalDateTime.now()
}
