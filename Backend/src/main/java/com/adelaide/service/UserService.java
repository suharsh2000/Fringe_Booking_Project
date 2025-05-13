package com.adelaide.service;

import com.adelaide.dto.UserDto;

import java.util.List;


public interface UserService {
    UserDto addUser(UserDto userDto);
    UserDto getUserByEmail(String email);
    List<UserDto> getAllUsers();

    UserDto UpdateUserByDetails(UserDto userDto);
}
