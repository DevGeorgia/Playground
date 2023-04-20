package com.georgialr.webservices.authentication;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {

    @GetMapping(path="/basicauth")
    public AuthenticationBean authenticate() {
        return new AuthenticationBean("Authentication successfull");
    }

}
