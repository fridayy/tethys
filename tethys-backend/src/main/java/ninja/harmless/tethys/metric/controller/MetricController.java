package ninja.harmless.tethys.metric.controller;

import ninja.harmless.tethys.metric.PhantomasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author bnjm@harmless.ninja - 1/31/17.
 */
@RestController
@RequestMapping(value = "${tethys.apiVersion}")
@CrossOrigin(origins = {"${tethys.frontend.angularUrl}", "${tethys.frontend.angularUrl}"})
public class MetricController {

    private PhantomasService phantomasService;

    @Autowired
    public MetricController(PhantomasService phantomasService) {
        this.phantomasService = phantomasService;
    }


    @GetMapping(value = "/metrics", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getMetrics(@RequestParam String url) {
        return new ResponseEntity<>(phantomasService.providePhantomasMetrics(url), HttpStatus.OK);
    }
}
