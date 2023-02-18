import React from 'react'

export const ProfileInfo = () => {
    const profileImgUrl= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaQgcZEclQv6bfL1Rp6V2Fwr2geLpSphVFE6X45hYM7Wci4VTJgu8itV_IfgOZL5Wm_M&usqp=CAU';
    return (
    <div className='p-4 mx-2 text-center'>
        <ul>
            <li className='flex justify-center'><img className='rounded-full w-24 h-24' src={profileImgUrl} alt='profileImg'/></li>
            <li className='font-bold text-2xl text-gray-700'>Diana Cooper</li>
            <li className='text-gray-500'>DianaCooper@example.com</li>
        </ul>
    </div>
  )
}
