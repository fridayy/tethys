package ninja.harmless.tethys.hateoas;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.hateoas.Link;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDateTime;
import java.util.Collection;

/**
 * Extends {@link org.springframework.hateoas.PagedResources} with access information.
 *
 * @author bnjm@harmless.ninja - 1/4/17.
 */
@XmlRootElement(name = "pagedEntities")
public class CustomPagedResources<T> extends org.springframework.hateoas.PagedResources<T> {

    private PageRequestMetadata pageRequestMetadata;

    public CustomPagedResources(Collection<T> content, PageMetadata metadata, Link... links) {
        super(content, metadata, links);
        pageRequestMetadata = new PageRequestMetadata();
    }

    public CustomPagedResources(Collection<T> content, PageMetadata metadata, Iterable<Link> links) {
        super(content, metadata, links);
        pageRequestMetadata = new PageRequestMetadata();
    }

    @JsonProperty("accessed")
    public PageRequestMetadata getPageRequestMetadata() {
        return pageRequestMetadata;
    }

    @Override
    public String toString() {
        return String.format("PagedResource { content: %s, metadata: %s, links: %s }", getContent(), super.getMetadata(), getLinks());
    }

    public static class PageRequestMetadata {
        @XmlAttribute @JsonProperty private LocalDateTime creationTime;

        public PageRequestMetadata() {
            this.creationTime = LocalDateTime.now();
        }

        public LocalDateTime getCreationTime() {
            return creationTime;
        }

        @Override
        public String toString() {
            return String.format("Accessed { at: %s }", creationTime.toString());
        }
    }
}


