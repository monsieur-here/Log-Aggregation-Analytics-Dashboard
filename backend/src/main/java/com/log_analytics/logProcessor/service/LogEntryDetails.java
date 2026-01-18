package com.log_analytics.logProcessor.service;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;

@Entity 				// ---- A proper way to use this to store persistently the log data ----
@Table(name = "log_management")
// @Data                  // ---- Automatically creates Getters-Setters, toString and equals for us
public class LogEntryDetails {

	private String user_id;	// User that generated the log
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Handles log_id increment automatically
	private long log_id;	 
	
	private Integer severity; // Type of the log

	private String message;	// Actual log message
	private String message_number; // Categorize the specific type of message
	
	private LocalDateTime timestamp; // Occurrence of log message and other details
	
	private String buildVersion; // Essential for different application build versions
	
	@PrePersist // Handles automatic timestamps
	protected void onCreate() { 
		this.timestamp = LocalDateTime.now(); 
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public long getLog_id() {
		return log_id;
	}

	public void setLog_id(long log_id) {
		this.log_id = log_id;
	}

	public Integer getSeverity() {
		return severity;
	}

	public void setSeverity(Integer severity) {
		this.severity = severity;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage_number() {
		return message_number;
	}

	public void setMessage_number(String message_number) {
		this.message_number = message_number;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getBuildVersion() {
		return buildVersion;
	}

	public void setBuildVersion(String buildVersion) {
		this.buildVersion = buildVersion;
	}
}
