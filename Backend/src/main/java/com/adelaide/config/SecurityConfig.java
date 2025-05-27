package com.adelaide.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.disable()) // Optional: or configure CORS globally in CorsConfig.java
                .csrf(csrf -> csrf.disable()) // ✅ This disables CSRF the Spring Boot 3+ way
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // ✅ Allow all endpoints
                );

        return http.build();
    }
}
