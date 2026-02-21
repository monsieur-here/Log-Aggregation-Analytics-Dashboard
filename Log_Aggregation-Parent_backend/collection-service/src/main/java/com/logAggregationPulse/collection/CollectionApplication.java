package com.logAggregationPulse.collection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class CollectionApplication {

    public static void main(String[] args) {
        SpringApplication.run(CollectionApplication.class, args);
    }

    // This is the "Voice" the collector uses to talk to the Parser
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}