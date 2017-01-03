package ninja.harmless.tethys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author bnjm@harmless.ninja - 1/3/17.
 */
@Controller
public class Angular2Controller {

  @RequestMapping("/")
  public ModelAndView frontend() {
    return new ModelAndView("forward://index.html");
  }
}
