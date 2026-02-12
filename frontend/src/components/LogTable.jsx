import React from 'react'

function LogTable({ logs }) {

  if(!logs) return null;

  const getSeverityStyle = (severity) => {
    switch(severity) {
        case 1: return 'bg-blue-100 text-blue-800 border-blue-200';
        case 2: return 'bg-emerald-100 text-emerald-800 border-emerald-200';
        case 3: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 4: return 'bg-orange-100 text-orange-800 border-orange-200';
        case 5: return 'bg-red-100 text-red-800 border-red-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
 }

  return (
    <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Level/Severity
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Message
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Build Version
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    User ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Timestamp
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            { logs.length > 0 ? (
                                logs.map((log) => (
                                    <tr key={log.log_id} className="border-b border-gray-800 hover:bg-gray-800/50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                ${getSeverityStyle(log.severity)}`}>
                                                {log.severity}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                                            {log.message}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-indigo-600">
                                            {log.buildVersion || (
                                                <span className="text-gray-400">N/A</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.user_id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                                            {new Date(log.timestamp).toLocaleString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                                        No logs available. Connection to database is active but an empty table.
                                    </td>
                                </tr>
                            ) } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
  )
};

export default LogTable;