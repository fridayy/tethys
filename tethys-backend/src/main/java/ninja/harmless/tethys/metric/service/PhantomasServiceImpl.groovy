package ninja.harmless.tethys.metric.service

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import ninja.harmless.tethys.metric.PhantomasService
import ninja.harmless.tethys.metric.exception.InvalidPhantomasUrlException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.env.Environment
import org.springframework.stereotype.Service
import org.springframework.util.Assert

/**
 * @author bnjm@harmless.ninja - 1/31/17.
 */
@Service
class PhantomasServiceImpl implements PhantomasService {

    @Autowired
    Environment environment

    @Override
    String providePhantomasMetrics(String url) {
        Assert.notNull(url, "Url cannot be null")
        if (!isApplicableUrl(url)) {
            throw new InvalidPhantomasUrlException("Url is not applicable")
        }
        return JsonOutput.toJson(parseCommand(url))
    }


    private Object parseCommand(String url) {
        JsonSlurper jsonSlurper = new JsonSlurper()
        def res

        String phantomasModules = environment.getProperty("tethys.phantomas.modules")

        try {
            res = jsonSlurper.parseText("phantomas $url --modules=$phantomasModules -R json:pretty --verbose".execute().text)
        } catch (IOException e) {
            throw new IllegalStateException("Could not call phantomas (not installed?)", e)
        }

        return res
    }

    private boolean isApplicableUrl(String url) {
        String canonicalUrl = getUrl(url)
        boolean isValid = canonicalUrl.equalsIgnoreCase(getUrl(environment.getProperty("tethys.frontend.reactDevUrl"))) ||
                canonicalUrl.equalsIgnoreCase(getUrl(environment.getProperty("tethys.frontend.reactUrl"))) ||
                canonicalUrl.equalsIgnoreCase(getUrl(environment.getProperty("tethys.frontend.angularDevUrl"))) ||
                canonicalUrl.equalsIgnoreCase(getUrl(environment.getProperty("tethys.frontend.angularUrl")))
        return isValid
    }

    private String getUrl(String url) {
        return url.split("/")[2]
    }
}
