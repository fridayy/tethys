package ninja.harmless.tethys.todo.service

import org.springframework.data.domain.Page
import org.springframework.data.web.HateoasPageableHandlerMethodArgumentResolver
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.Link
import org.springframework.hateoas.PagedResources
import org.springframework.hateoas.ResourceAssembler
import org.springframework.hateoas.ResourceSupport
import org.springframework.web.util.UriComponents

/**
 * Test Mock
 *
 * @author bnjm@harmless.ninja - 12/17/16.
 */
class PagedResourcesAssemblerMock<T> extends PagedResourcesAssembler<T> {


    PagedResourcesAssemblerMock(HateoasPageableHandlerMethodArgumentResolver resolver, UriComponents baseUri) {
        super(null, null)
    }

    @Override
    <R extends ResourceSupport> PagedResources<R> toResource(Page<T> page, ResourceAssembler<T, R> assembler) {
        return new PagedResources<R>([], new PagedResources.PageMetadata(1L,1L,1L,1L), new Link("self"))
    }
}
