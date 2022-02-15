package com.activity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.activity.beans.UserBean;
import com.activity.exception.ProfileNotFoundException;
import com.activity.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	@Transactional
	public UserBean storeUser(UserBean ub) {
		return userRepo.save(ub);
	}

	@Override
	@Transactional
	public void deleteUser(Integer id) throws ProfileNotFoundException {
		userRepo.deleteById(id);
	}

	@Override
	public UserBean fetchUser(Integer id) throws ProfileNotFoundException {
		return userRepo.findById(id).get();
	}

	@Override
	@Transactional
	public UserBean updatePassword(int id, String password) throws ProfileNotFoundException {
		UserBean u = fetchUser(id);
		u.setPassword(password);
		return userRepo.save(u);
	}

	@Override
	public List<UserBean> fetchAll() {
		return userRepo.findAll();
	}

	@Override
	@Transactional
	public UserBean updatePhone(int id, Long phone) throws ProfileNotFoundException {
		UserBean u = fetchUser(id);
		u.setPhone(phone);
		return userRepo.save(u);
	}

	@Override
	public UserBean findByName(String name) throws ProfileNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

}
