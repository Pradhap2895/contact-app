package com.activity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.activity.beans.UserBean;

public interface UserRepository extends JpaRepository<UserBean, Integer> {
	UserBean findByUserName(String username);
}
