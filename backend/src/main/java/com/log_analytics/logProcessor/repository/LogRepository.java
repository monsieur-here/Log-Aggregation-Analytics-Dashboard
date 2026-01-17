package com.log_analytics.logProcessor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.log_analytics.logProcessor.service.LogEntryDetails;

@Repository	
// Handle different types of data using an extended generic interface without rewriting the logic for each project
public interface LogRepository extends JpaRepository<LogEntryDetails, Long>{
	
}

// LogEntryDetails - An Entity which informs the repository to manage the LogEntryDetails containing log_management table
// Long - Primary Key usage and when searched by ID, you expect to get a number