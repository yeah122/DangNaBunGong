package com.example.dang_na_bun_gong.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/home")
	public String home(HttpSession session) {

		if(session.getAttribute("userid") != null) {
			System.out.println("Home session: " + session.getAttribute("userid").toString());
		}

		return "home";
	}
}
