import React from 'react'

export const AppointmentCountInfo = () => {
  return (
    <div className='flex justify-center'>
        <div className='px-2 text-center '>
            <ul>
                <li className='text-xl text-gray-600'>15</li>
                <li className='text-gray-400 text-sm'>Past</li>
            </ul>
        </div>
        <div className='border border-gray-300 ml-8 mr-4'></div>
        <div className='px-2  text-center'>
            <ul>
                <li className='text-xl text-gray-600'>02</li>
                <li className='text-gray-400 text-sm'>Upcoming</li>
            </ul>
        </div>
        
    </div>
  )
}
