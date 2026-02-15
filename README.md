# Log-Management-System: Real-Time Log Aggregation Analytics Dashboard

Currently this is a full-stack log monitoring monolithic software architecture implemented solution designed to collect, process, and store system activities. This project demonstrates a complete data pipeline from a Spring Boot backend to a modern React frontend planning to be scaled up further with improving application architectures.

This project is a real-time basic log monitoring dashboard. It has been fully containerized using Docker to ensure environment parity and scalable deployment.

# Current Architecture (Monolith)
Frontend: React / Tailwind CSS (Vite)

Backend: Java 21 / Spring Boot 3 / Hibernate

Database: MySQL 8.0

Infrastructure: Docker Compose

Access the Dashboard:
Frontend: http://localhost:5173    
API: http://localhost:8080/api/logs

## System Architecture for Log Aggregation inside the coding files 

This project implements the standard log-management cycle as follows :
1. **Collection:** Captures events from the application.
2. **Parsing:** Validates and structures incoming JSON data in Java.
3. **Processing:** Aggregates data on the frontend to provide real-time analytics.
4. **Storage:** Persists records in a MySQL database.

## Features

- **Real-time Stats Cards:** Instant visualization of total logs and critical errors.
- **Dynamic Data Grid:** Responsive table with severity-based color coding.
- **Auto-Refresh:** One-click synchronization with the storage layer.
- **Modular Components:** Clean React architecture for maintainability.
- **Containerization:** Hot Module Replacement (HMR) is enabled within Docker for instant UI updates.
- **Data Persistence:** Managed via Docker Volumes to ensure log history survives container restarts.
- **Real-time Analytics:** Automated polling provides a live "Pulse" of system health based on error-to-info ratios.

## Setup & Easier Onboarding
Create a folder structure for backend and frontend 

1. **Database:** Create a MySQL schema and run the `log_management` table setup which will be connected from the backend running, and reflected on the frontend.
2. **Backend:** Configure `application.properties` and run the Spring Boot app.
3. **Frontend:**
   ```
   cd frontend
   npm install
   npm run dev
   ```
Ensure you have Docker Desktop installed.

To view my work, clone this repository:
```
git clone https://github.com/monsieur-here/Log-Aggregation-Analytics-Dashboard
```
Once your monolith is setup, create dockerfile(or view) on both frontend and backend to register your application builds. Compose it in the main directory which contains a .yml file orchestrating your build.

This ensures your frontend and backend connection is built without requiring each service to do the heavy work, as now we are encouraging "Write Once, Run Anywhere" with this packaged code. 

Docker containerizes these builds and with adding volumes inside your file, you ensure a Hot Reload is done without worrying about the previous log history getting empty everytime. Then,
Launch the stack:
```
docker compose up --build
```
To shut down and update your application just - 
```
docker compose down
docker compose up                                  # AFTER BEING SURE OF YOUR UPDATES
```

# References 
-https://signoz.io/comparisons/log-aggregation-tools/ 
-https://www.ibm.com/docs/en/cmofz/9.5.0?topic=exit-system-log-database-table 
-Thanks to Google Gemini for a better understanding of use cases with folder structures and then performing containerization with Hot Reload👌.
-Love how this GPT criticizes me and pushes me to refer different websites... Because it's important you present your questions properly🤓.

I recommend you to use VSCode for frontend, SpringToolsSuite for Spring Boot and Postman for API Endpoint Testing.

Happy learning!
