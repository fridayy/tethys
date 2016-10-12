package ninja.harmless.tethys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * The AngularController provides the static index.html file within the
 * resources/static folder.
 *
 * @author bnjm@harmless.ninja - 10/12/16.
 */
@Controller
public class AngularController {

    @RequestMapping("/")
    public ModelAndView frontend() {
        return new ModelAndView("forward://index.html");
    }
}
