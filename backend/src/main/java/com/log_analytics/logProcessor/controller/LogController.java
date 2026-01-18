package com.log_analytics.logProcessor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.log_analytics.logProcessor.LogAggregationApplication;
import com.log_analytics.logProcessor.repository.LogRepository;
import com.log_analytics.logProcessor.service.LogEntryDetails;

@RestController
@RequestMapping("/api/logs")
public class LogController {

    private final LogAggregationApplication logAggregationApplication;
	
	@Autowired
	private LogRepository logrepo;

    LogController(LogAggregationApplication logAggregationApplication) {
        this.logAggregationApplication = logAggregationApplication;
    }
	
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
	
	@GetMapping("/{log_id}")
	public ResponseEntity<LogEntryDetails> getLogById(@PathVariable Long log_id){
		return logrepo.findById(log_id)
					  .map(log -> ResponseEntity.ok(log))
					  .orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{log_id}")
	public ResponseEntity<Void> deleteLog(@PathVariable Long log_id){
		if(logrepo.existsById(log_id)) {
			logrepo.deleteById(log_id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
