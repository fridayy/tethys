package ninja.harmless.tethys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * The ReactController provides the static index.html file within the
 * resources/static folder.
 *
 * @author bnjm@harmless.ninja - 10/13/16.
 */
@Controller
public class ReactController {

    @RequestMapping("/")
    public ModelAndView frontend() {
        return new ModelAndView("forward://index.html");
    }
}
