package com.log_analytics.logProcessor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.log_analytics.logProcessor.repository.LogRepository;
import com.log_analytics.logProcessor.service.LogEntryDetails;

@RestController
@RequestMapping("/api/logs")
public class LogController {
	
	@Autowired
	private LogRepository logrepo;
	
	// Perform POST request to send logs to the dashboard
	@PostMapping
	public LogEntryDetails createLogEntries(@RequestBody LogEntryDetails log_details) {
		return logrepo.save(log_details);
	}
	
	// Perform GET to retrieve all logs created and display in the dashboard as a table
	@GetMapping
	public List<LogEntryDetails> getAllLogEntries(){
		return logrepo.findAll();
	}
}
