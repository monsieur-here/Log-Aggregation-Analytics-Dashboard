# Log-Management-System: Real-Time Log Aggregation Analytics Dashboard

Currently this is a full-stack log monitoring solution designed to collect, process, and store system activities. This project demonstrates a complete data pipeline from a Spring Boot backend to a modern React frontend planning to be scaled up further with improving application architectures.

## 🏛️ System Architecture
This project implements the standard log-management cycle as follows :
1. **Collection:** Captures events from the application.
2. **Parsing:** Validates and structures incoming JSON data in Java.
3. **Processing:** Aggregates data on the frontend to provide real-time analytics.
4. **Storage:** Persists records in a MySQL database.

## 📊 Key Features
- **Real-time Stats Cards:** Instant visualization of total logs and critical errors.
- **Dynamic Data Grid:** Responsive table with severity-based color coding.
- **Auto-Refresh:** One-click synchronization with the storage layer.
- **Modular Components:** Clean React architecture for maintainability.

## 🛠️ Setup & Installation
Create a folder structure for backend and frontend 

1. **Database:** Create a MySQL schema and run the `log_management` table setup.
2. **Backend:** Configure `application.properties` and run the Spring Boot app.
3. **Frontend:**
   ```
   cd frontend
   npm install
   npm run dev

References - https://signoz.io/comparisons/log-aggregation-tools/, https://www.ibm.com/docs/en/cmofz/9.5.0?topic=exit-system-log-database-table and thanks to Google Gemini for a better understanding of use cases with folder structures😁... Love how this GPT criticizes me and pushes me to refer different websites
