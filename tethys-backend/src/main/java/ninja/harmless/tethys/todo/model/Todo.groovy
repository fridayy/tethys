package ninja.harmless.tethys.todo.model

import ninja.harmless.tethys.data.entity.BaseEntity

import java.time.LocalDateTime

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class Todo extends BaseEntity {

    Todo() {
    }

    Todo(String title, String description) {
        this.title = title
        this.description = description
    }

    Todo(String resourceId, String title, String description, Boolean markedDone, LocalDateTime createdAt) {
        this.resourceId = resourceId
        this.title = title
        this.description = description
        this.markedDone = markedDone
        this.createdAt = createdAt
    }

    String title
    String description
    Boolean markedDone = false
    LocalDateTime createdAt = LocalDateTime.now()
}
