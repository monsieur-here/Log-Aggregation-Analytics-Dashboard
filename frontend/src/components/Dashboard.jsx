import React from 'react'
import { useState, useEffect } from 'react';
import logService from '../api/logService';
import LogTable from './LogTable';
import StatsCard from './StatsCard';
import { Database, AlertTriangle, Cpu } from 'lucide-react';

function Dashboard() {

  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  // Processing Stage - StatsCard Component
  const totalLogs = logs.length;
  const errorLogs = logs.filter(log => log.severity === 'ERROR').length;
  const uniqueBuilds = [...new Set(logs.map(log => log.buildVersion).filter(val => val && val !== 'N/A'))].length;

  useEffect(() => {
    const getLogs = async () => {
      try{
        const data = await logService.getLogs();
        setLogs(data);
      } catch (err) {
        setError("Failed to connect to backend service.");
        console.error(err);
      }
    };

    getLogs();
}, []);

return (
  <div className="min-h-screen bg-orange-400 text-black flex flex-col items-center py-12">
    <div className="max-w-6xl w-full">
      {/* Header Position */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-black">Log Aggregation Analytics Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Real-time logging from Spring Boot and MySQL database.
        </p>
      </header>
      {/* Error Handling */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <StatsCard title="Total Collected Logs" value={totalLogs} color="border-blue-500" icon={Database} IconColor="bg-blue-50 text-blue-600"/>
        <StatsCard title="Error Logs" value={errorLogs} color="border-red-500" icon={AlertTriangle} IconColor="bg-red-50 text-red
        
        \-600"/>
        <StatsCard title="Unique Builds" value={uniqueBuilds} color="border-indigo-500" icon={Cpu} IconColor="bg-green-50 text-green-600"/>
      </div>

      {/* Log Table Component */}
      <div className="w-full max-w-5xl px-4">
        <LogTable logs={logs} />
      </div>
    </div>
  </div>
)

}

export default Dashboard