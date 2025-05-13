package com.adelaide.controller;

import com.adelaide.dto.UserDto;
import com.adelaide.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000",
                           "https://fringe-booking-project-dpx3ik8hj-suharshs-projects-721d5590.vercel.app")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/register")
    private UserDto saveUser(@RequestBody UserDto userDto) {
        return service.addUser(userDto);
    }
    @GetMapping("/{email}")
    private UserDto getUserByEmail(@PathVariable String email) {
        email = URLDecoder.decode(email, StandardCharsets.UTF_8); // Decodes "%40" back to "@"
        return service.getUserByEmail(email);
    }


    @GetMapping("/getAllUsers")
    private List<UserDto> getAllUsers(){
        return service.getAllUsers();
    }

@RestController
@RequestMapping("/api")
public class HealthCheckController {
    @GetMapping("/check")
    public String check() {
        return "Backend is running!";
    }
}
    @PutMapping("/UpdateUser")
    private UserDto updateUser(@RequestBody UserDto userDto){
        return service.UpdateUserByDetails(userDto);
    }
}
