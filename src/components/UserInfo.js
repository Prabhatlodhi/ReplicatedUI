import React from 'react'

export const UserInfo = () => {
    const  userData = {
        gender: 'Female',
        birthday: 'Feb 24th, 1997',
        phoneNumber : '(239) 555 -0108',
        registeredDate : 'Feb 24th, 1997',
        streetAdress : 'JL. Diponegoro No. 21',
        city : 'Cliacap',
        zipcode : '655849',
        memberStatus : 'Active Member'
    }
    return (
        // <div className='grid grid-cols-4 bg-red-100'>
        //     {/* <div className='grid grid-cols-4'>
        //         <div>01</div>
        //         <div>02</div>
        //         <div>03</div>
        //         <div>04</div>
        //         <div>05</div>
        //     </div>
        //     <div className='grid grid-cols-4'>
        //         <div>01</div>
        //         <div>02</div>
        //         <div>03</div>
        //         <div>04</div>
        //     </div> */}
        //     <div className=' grid grid-cols-6 bg-gray-200'>01</div>
        //     <div className=' grid grid-cols-6 bg-gray-200'>01</div>
        //     <div className=' grid grid-cols-4'>01</div>
        //     <div className=' grid grid-cols-4'>01</div>
        //     <div className=' grid grid-cols-4'>01</div>
            
        // </div>
    <div className=' m-2 grid md:grid-cols-1  lg:grid-cols-4  ml-4'>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Gender</h4>
            <h2 className='text-lg'>{userData.gender}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Birthday</h4>
            <h2 className='text-lg'>{userData.birthday}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Phone Number</h4>
            <h2 className='text-lg'>{userData.phoneNumber}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Registered Date</h4>
            <h2 className='text-lg'>{userData.registeredDate}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Street Adress</h4>
            <h2 className='text-lg'>{userData.streetAdress}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>City</h4>
            <h2 className='text-lg'>{userData.city}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Zip Code</h4>
            <h2 className='text-lg'>{userData.zipcode}</h2>
        </div>
        <div className='p-2 m-8 text-sm text-gray-500 shadow-lg'>
            <h4>Member Status</h4>
            <h2 className='text-lg'>{userData.memberStatus}</h2>
        </div>
    </div>
  )
}
