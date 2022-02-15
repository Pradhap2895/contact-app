package com.activity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.activity.beans.UserBean;
import com.activity.exception.CustomMessage;
import com.activity.exception.ProfileNotFoundException;
import com.activity.service.UserService;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "profile", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
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
	
	@DeleteMapping(path = "/profile/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable("id") int id) {
		ResponseEntity<Object> response = null;
		CustomMessage msg = null;
		try {
			userService.deleteUser(id);
			msg = new CustomMessage("User with id " + id + " is deleted", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(msg);
		} catch (ProfileNotFoundException e) {
			msg = new CustomMessage(e.getMessage(), 400);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(msg);
		}
		return response;
	}

	@GetMapping(path = "/profile/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> findUser(@PathVariable("id") int id) {
		ResponseEntity<Object> response = null;
		CustomMessage msg = null;
		try {
			UserBean u = userService.fetchUser(id);
			response = ResponseEntity.status(HttpStatus.OK).body(u);
		} catch (ProfileNotFoundException e) {
			msg = new CustomMessage(e.getMessage(), 400);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(msg);
		}
		return response;
	}

	@PutMapping(path = "/profile/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> updateUserPassword(@PathVariable("id") int id, @RequestBody UserBean user) {
		ResponseEntity<Object> response = null;
		CustomMessage msg = null;
		//String name = user.getUserName();
		Long phone = user.getPhone();
		String password = user.getPassword();
		//int age = user.getAge();
		UserBean updatedUser = null;
		try {
			if (password != null) {
				updatedUser = userService.updatePassword(id, password);
			} else  {
				updatedUser = userService.updatePhone(id, phone);
			} 

			// msg = new CustomMessage("User with id " + id + " is updated", 200);
			response = ResponseEntity.status(HttpStatus.OK).body(updatedUser);
		} catch (ProfileNotFoundException e) {
			msg = new CustomMessage(e.getMessage(), 400);
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(msg);
		}
		return response;
	}

}
