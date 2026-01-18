// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

import logService from './api/logService';

logService.getLogs()
.then(logs => console.log("Successful connection", logs))
.catch(err => console.error("Cross Origin Connection Failed", err));

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Testing Basic Log-Tracking Build

// const testNewBuildLog = async () => {
//   const newLog = {
//     level: "INFO",
//     message: "Manual build deployment.",
//     buildVersion: "v1.0.1",
//     user_id: "admin_user",
//     timestamp: new Date().toISOString()
//   }

//   console.log("Testing new build log creation...", await logService.createLog(newLog));
// };

// testNewBuildLog();