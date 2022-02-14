package com.activity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.activity.beans.UserBean;
import com.activity.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> saveUser(@RequestBody UserBean userBean) {
		ResponseEntity<Object> response = null;
		try {
			UserBean responseBean = userService.storeUser(userBean);
			response = ResponseEntity.status(HttpStatus.CREATED).body(responseBean);
		} catch (Exception e) {
			System.out.println("error" + e);
		}
		return response;
	}
}
