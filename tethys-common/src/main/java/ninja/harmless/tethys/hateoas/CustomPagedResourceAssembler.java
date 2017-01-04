package ninja.harmless.tethys.hateoas;

import org.springframework.data.domain.Page;
import org.springframework.data.web.HateoasPageableHandlerMethodArgumentResolver;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.web.util.UriComponents;

/**
 * Adapter to transform a {@link PagedResources} to a {@link CustomPagedResources} in order to add additional metadata
 * to a paged resource.
 *
 * @author bnjm@harmless.ninja - 1/4/17.
 */
public class CustomPagedResourceAssembler<T> extends PagedResourcesAssembler<T> {

    public CustomPagedResourceAssembler(HateoasPageableHandlerMethodArgumentResolver resolver, UriComponents baseUri) {
        super(resolver, baseUri);
    }

    /**
     * Creates a new {@link PagedResources} by converting the given {@link Page} into a {@link PagedResources.PageMetadata} instance and
     * using the given {@link ResourceAssembler} to turn elements of the {@link Page} into resources.
     *
     * @param page      must not be {@literal null}.
     * @param assembler must not be {@literal null}.
     * @return
     */
    @Override
    public <R extends ResourceSupport> CustomPagedResources<R> toResource(Page<T> page, ResourceAssembler<T, R> assembler) {
        PagedResources<R> obj = super.toResource(page, assembler);
        CustomPagedResources<R> adapted = new CustomPagedResources<R>(obj.getContent(), obj.getMetadata(), obj.getLinks());
        return adapted;
    }
}
