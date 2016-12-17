package ninja.harmless.tethys.todo.service

import ninja.harmless.tethys.todo.model.TodoStatistic
import ninja.harmless.tethys.todo.model.TodoStatisticResource
import ninja.harmless.tethys.todo.repository.TodoRepository
import org.springframework.hateoas.ResourceAssembler
import spock.lang.Specification
/**
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class TodoStatisticServiceTest extends Specification {

    TodoStatisticServiceImpl classUnderTest
    TodoRepository mockedRepository
    ResourceAssembler<TodoStatistic, TodoStatisticResource> mockedAssembler

    void setup() {
        mockedRepository = Mock(TodoRepository)
        mockedAssembler = Mock(ResourceAssembler)
        classUnderTest = new TodoStatisticServiceImpl(mockedRepository, mockedAssembler)
    }

    void "provideTotalStatistics provided correct numbers"() {
        given:
            mockedRepository.count() >> 10L
            mockedRepository.countMarkedDone() >> 5
        when:
            def result = classUnderTest.provideTotalStatistics()
        then:
            1 * mockedAssembler.toResource({ stats ->
                stats.statistic.totalTodos == 10 &&
                stats.statistic.percentageDone == 50d &&
                stats.statistic.openTodos == 5
            })
    }
}
