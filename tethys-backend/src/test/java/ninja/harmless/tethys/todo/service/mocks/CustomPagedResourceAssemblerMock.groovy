package ninja.harmless.tethys.todo.service.mocks

import ninja.harmless.tethys.hateoas.CustomPagedResourceAssembler
import ninja.harmless.tethys.hateoas.CustomPagedResources
import org.springframework.data.domain.Page
import org.springframework.data.web.HateoasPageableHandlerMethodArgumentResolver
import org.springframework.hateoas.ResourceAssembler
import org.springframework.hateoas.ResourceSupport
import org.springframework.web.util.UriComponents
/**
 * @author bnjm@harmless.ninja - 1/11/17.
 */
class CustomPagedResourceAssemblerMock<T> extends CustomPagedResourceAssembler<T> {

    CustomPagedResourceAssemblerMock(HateoasPageableHandlerMethodArgumentResolver resolver, UriComponents baseUri) {
        super(null, null)
    }

    @Override
    <R extends ResourceSupport> CustomPagedResources<R> toResource(Page<T> page, ResourceAssembler<T, R> assembler) {
        return new CustomPagedResources<R>(new ArrayList<R>(), null, [])
    }
}
