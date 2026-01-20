import React from 'react'
import { useState, useEffect } from 'react';
import logService from '../api/logService';
import LogTable from './LogTable';
import StatsCard from './StatsCard';
import FilterResults from './FilterResults';
import { Database, AlertTriangle, Cpu } from 'lucide-react';

// Parse logic required for flow of System Architecture
const parseLogs = (logs) => {
    return logs.map(log => ({
      ...log,
      severity: Number(log.severity) || 0,
      timestamp: new Date(log.timestamp) || new Date(),
      user_id: log.user_id || 'Unknown',
      message: log.message || '',
      buildVersion: (log.buildVersion && log.buildVersion !== 'N/A') ? log.buildVersion : "v0.0.0",
    }));
}

function Dashboard() {

  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);

  // Processing Stage - StatsCard Component
  const totalLogs = logs.length;
  const errorLogs = logs.filter(log => log.severity === 'ERROR').length;
  const uniqueBuilds = [...new Set(logs.map(log => log.buildVersion).filter(val => val && val !== 'N/A'))].length;

  // Filtering Logic - Processing Stage
  const [searchTerm, setSearchTerm] = useState('');
  const [selectSeverity, setSelectSeverity] = useState(0);
  const [selectedVersion, setSelectedVersion] = useState('v0.0.0');

  const filteredLogs = logs.filter(log => {
    const searchTermMatch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            log.user_id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const severityMatch = selectSeverity === 0 || log.severity === selectSeverity;

    const versionMatch = selectedVersion === 'v0.0.0' || log.buildVersion === selectedVersion;

    return searchTermMatch && severityMatch && versionMatch;

  });

  useEffect(() => {
    const fetchLogs = async () => {
      try{
        // Collection Stage
        const data = await logService.getAllLogs();
        // Parsing Stage
        const structuredData = parseLogs(data);

        // Storage Stage
        setLogs(structuredData);

      } catch (err) {
        setError("Failed to connect to backend service.");
        console.error(err);
      }
    };

    fetchLogs();
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
        <StatsCard title="Error Logs" value={errorLogs} color="border-red-500" icon={AlertTriangle} IconColor="bg-red-50 text-red-600"/>
        <StatsCard title="Unique Builds" value={uniqueBuilds} color="border-indigo-500" icon={Cpu} IconColor="bg-green-50 text-green-600"/>
      </div>

            {/* --- FILTER UI SECTION (Processing Stage) --- */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex flex-col md:flex-row gap-4 items-end">
        {/* Search Input */}
        <div className="flex-grow">
          <label className="block text-sm font-bold text-gray-700 mb-1">Search Logs</label>
          <input 
            type="text"
            placeholder="Search message or user..."
            className="w-full p-2 border rounded-lg bg-gray-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Severity Dropdown */}
        <div className="w-full md:w-40">
          <label className="block text-sm font-bold text-gray-700 mb-1">Severity Level</label>
          <select 
            className="w-full p-2 border rounded-lg bg-gray-50"
            value={selectSeverity}
            onChange={(e) => setSelectSeverity(Number(e.target.value))}
          >
            <option value={0}>All Levels</option>
            <option value={1}>1 - Info</option>
            <option value={2}>2 - Low</option>
            <option value={3}>3 - Warning</option>
            <option value={4}>4 - Error</option>
            <option value={5}>5 - Critical</option>
          </select>
        </div>

        {/* Version Dropdown */}
        <div className="w-full md:w-40">
          <label className="block text-sm font-bold text-gray-700 mb-1">Version</label>
          <select 
            className="w-full p-2 border rounded-lg bg-gray-50"
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}>
            
            <option value="v0.0.0">All Versions</option>
            {[...new Set(logs.map(l => l.buildVersion))].map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
            
          </select>
        </div>
      </div>

      {/* Log Table Section */}
      {filteredLogs.length > 0 ? (
        <div className="w-full max-w-5xl px-4">
          <LogTable logs={filteredLogs} />
        </div>
        ) : (
        <FilterResults 
          isSearch={logs.length > 0}
          onReset={() => {
            setSearchTerm('');
            setSelectSeverity(0);
            setSelectedVersion('v0.0.0');
          }}
          />
      )}
    </div>
  </div>
)

}

export default Dashboard