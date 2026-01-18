import React from 'react'

function StatsCard({ title, value, color, icon: IconComponent, IconColor }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border-b-4 ${color}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            </div>
            <div className={`p-3 rounded-lg ${IconColor ? IconColor : 'bg-gray-50 text-gray-500'}`}>
                 <IconComponent size={24} className="h-12 w-12 text-gray-400" />
            </div>
           
        </div>
    </div>
  )
}

export default StatsCard;