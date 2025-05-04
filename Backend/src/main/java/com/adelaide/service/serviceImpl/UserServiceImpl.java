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
        User user = mapper.map(userDto, User.class);
        User savedUser = repo.save(user);
        return mapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto getUserByEmail(String email) {
        User user = repo.findByEmail(email);
        return mapper.map(user, UserDto.class);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return repo.findAll()
                .stream()
                .map(user -> mapper.map(user, UserDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto UpdateUserByDetails(UserDto userDto) {
        User user = repo.findByEmail(userDto.getEmail());
        if (!user.getCountry().equals(userDto.getCountry())) {
            user.setCountry(userDto.getCountry());
        }
        if (!user.getEmail().equals(userDto.getEmail())) {
            user.setEmail(userDto.getEmail());
        }

        if (!user.getFirstname().equals(userDto.getFirstname())) {
            user.setFirstname(userDto.getFirstname());
        }

        if (!user.getLastname().equals(userDto.getLastname())) {
            user.setLastname(userDto.getLastname());
        }

        if (!user.getPassword().equals(userDto.getPassword())) {
            user.setPassword(userDto.getPassword());
        }

        if (!user.getDob().equals(userDto.getDob())) {
            user.setDob(userDto.getDob());
        }

        if (!user.getGender().equals(userDto.getGender())) {
            user.setGender(userDto.getGender());
        }

        if (!user.getMobile().equals(userDto.getMobile())) {
            user.setMobile(userDto.getMobile());
        }

        if (!user.getTitle().equals(userDto.getTitle())) {
            user.setTitle(userDto.getTitle());
        }
        repo.save(user);
        return mapper.map(user, UserDto.class);
    }
}
