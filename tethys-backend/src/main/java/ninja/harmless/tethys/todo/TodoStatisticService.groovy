package ninja.harmless.tethys.todo

import ninja.harmless.tethys.todo.model.TodoStatisticResource
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
interface TodoStatisticService {
    TodoStatisticResource provideTotalStatistics()
}