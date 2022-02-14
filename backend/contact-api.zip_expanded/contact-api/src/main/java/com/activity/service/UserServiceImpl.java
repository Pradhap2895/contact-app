package com.activity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.activity.beans.UserBean;
import com.activity.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public UserBean storeUser(UserBean ub) {
		return userRepo.save(ub);
	}

}
