package com.georgialr.webservices.udemy;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
class UdemyApplicationTests {

	@Test
	void BCryptEncoder() {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String passEnc = encoder.encode("Test");
		System.out.println("Pass Encoded " + passEnc);
	}

}
