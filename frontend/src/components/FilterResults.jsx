import React from 'react'
import { Database, SearchX } from 'lucide-react';

function FilterResults({ isSearch, onReset }) {
  return (
     <div className = "flex flex-col items-center justify-center p-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
      <div className="bg-gray-50 p-4 rounded-full mb-4">
        {isSearch ? <SearchX size={45} className="text-gray-400"/> : <Database size={45} className="text-gray-400"/>}
      </div>

    <h3 className="text-lg font-semibold text-gray-200">
      {isSearch ? "No logs match your search criteria." : "No logs available in the database."}
    </h3>

    <p className="text-gray-500 text-sm mt-1 max-w-xs text-center">
      {isSearch ? "Try adjusting your filters to find what you actually look for." : "Ensure logs are there moving from backend to MySQL storage."}
    </p>
    { isSearch && (<button onClick={onReset} 
      className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-500 underline">
        Clear all Filters
    </button>
    )}
  </div>
  )
}

export default FilterResults