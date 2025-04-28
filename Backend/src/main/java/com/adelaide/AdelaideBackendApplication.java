package com.adelaide;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AdelaideBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdelaideBackendApplication.class, args);
	}
	@Bean
	ModelMapper getModelMapper() {
		return new ModelMapper();
	}
}
