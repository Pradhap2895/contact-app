package com.activity.service;

import java.util.List;

import com.activity.beans.UserBean;
import com.activity.exception.ProfileNotFoundException;

public interface UserService {

	public UserBean storeUser(UserBean ub);

	public void deleteUser(Integer id) throws ProfileNotFoundException;

	public UserBean fetchUser(Integer id) throws ProfileNotFoundException;

	public UserBean updatePassword(int id, String password)throws ProfileNotFoundException;;

	public UserBean updatePhone(int id, Long phone)throws ProfileNotFoundException;

	List<UserBean> fetchAll();
	
	public UserBean findByName(String name) throws ProfileNotFoundException;
}
