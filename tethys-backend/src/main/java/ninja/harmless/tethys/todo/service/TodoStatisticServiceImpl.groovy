package ninja.harmless.tethys.todo.service

import ninja.harmless.tethys.todo.TodoStatisticService
import ninja.harmless.tethys.todo.model.TodoStatisticResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.stereotype.Service
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
@Service
class TodoStatisticServiceImpl implements TodoStatisticService {

    TodoRepository repository
    TodoStatisticAssembler todoStatsticAssembler

    @Override
    TodoStatisticResource provideTotalStatistics() {
        return null
    }
}
