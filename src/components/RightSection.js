import React from 'react'
import { AppointmentInfo } from './AppointmentInfo'
import { UserInfo } from './UserInfo'

export const RightSection = () => {
  return (
    <div className='ml-6'>
        <UserInfo/>
        <AppointmentInfo/>
    </div>
  )
}
