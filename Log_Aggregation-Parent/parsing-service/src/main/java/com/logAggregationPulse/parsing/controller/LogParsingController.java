package com.logAggregationPulse.parsing.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logAggregationPulse.model.LogEntryDetails;

@RestController
@RequestMapping("/api/parse")
public class LogParsingController {

	@PostMapping
	public ResponseEntity<LogEntryDetails> processAndParse(@RequestBody LogEntryDetails rawLog){
		
		if (rawLog.getSeverity() != null && rawLog.getSeverity() >= 3) {
	        rawLog.setSource(rawLog.getSource() + " [CRITICAL-ALERT]");
	    } else {
	        rawLog.setSource(rawLog.getSource() + " [Processed]");
	    }
		
		return ResponseEntity.ok(rawLog);
	}
	
}
