package ninja.harmless.tethys.todo.model

/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class Statistic {

    Statistic() {
    }

    Statistic(Integer totalTodos, Integer markedDone, Integer openTodos, Double percentageDone) {
        this.totalTodos = totalTodos
        this.markedDone = markedDone
        this.openTodos = openTodos
        this.percentageDone = percentageDone
    }
    Integer totalTodos
    Integer markedDone
    Integer openTodos
    Double percentageDone
}
