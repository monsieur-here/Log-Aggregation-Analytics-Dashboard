package com.logAggregationPulse.collection.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.logAggregationPulse.model.LogEntryDetails;



@RestController
@RequestMapping("/api/logs")
@CrossOrigin(origins = "http://localhost:5173/")
public class LogCollectionController {

	
	@Autowired
//	private LogRepository logrepo;
	private RestTemplate restTemplate;
	
	// Perform POST request to send logs to the dashboard
	@PostMapping
	public ResponseEntity<String> createLogEntries(@RequestBody LogEntryDetails log_details) {
//		return logrepo.save(log_details);
		System.out.println("Received log from source: " + log_details.getSource());
		
		String parseUrl = "http://localhost:8082/api/parse";
		
		try { 
			ResponseEntity<LogEntryDetails> res = restTemplate.postForEntity(
					parseUrl,
					log_details,
					LogEntryDetails.class
			);
			
			return ResponseEntity.ok("Log processed! Parser says: " + res.getBody().getSource());
			
		} catch (Exception e) {
			return ResponseEntity.status(500).body("Handoff failed: " + e.getMessage());
		}
	}
	
//	// Perform GET to retrieve all logs created and display in the dashboard as a table
//	@GetMapping
//	public List<LogEntryDetails> getAllLogEntries(){
//		return logrepo.findAll();
//	}
//	
//	@GetMapping("/{log_id}")
//	public ResponseEntity<LogEntryDetails> getLogById(@PathVariable Long log_id){
//		return logrepo.findById(log_id)
//					  .map(log -> ResponseEntity.ok(log))
//					  .orElse(ResponseEntity.notFound().build());
//	}
//	
//	@DeleteMapping("/{log_id}")
//	public ResponseEntity<Void> deleteLog(@PathVariable Long log_id){
//		if(logrepo.existsById(log_id)) {
//			logrepo.deleteById(log_id);
//			return ResponseEntity.noContent().build();
//		}
//		return ResponseEntity.notFound().build();
//	}
}
