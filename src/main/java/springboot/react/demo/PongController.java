package springboot.react.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PongController {

  @RequestMapping(value = "/api/ping", method = RequestMethod.GET)
  @CrossOrigin(origins = "*")
  public String pong() {
    return "pong";
  }
}