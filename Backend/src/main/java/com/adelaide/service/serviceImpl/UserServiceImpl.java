package com.adelaide.service.serviceImpl;

import com.adelaide.dto.UserDto;
import com.adelaide.entity.User;
import com.adelaide.repo.UserRepository;
import com.adelaide.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public UserDto addUser(UserDto userDto) {
        System.out.println((userDto.getCountry()));
        User user = mapper.map(userDto, User.class);
        User savedUser = repo.save(user);
        return mapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto getUserByEmail(String email) {
        User dto= repo.findByEmail(email);
        return mapper.map(dto, UserDto.class);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return repo.findAll()
                .stream()
                .map(user -> mapper.map(user, UserDto.class))
                .collect(Collectors.toList());
    }
}
