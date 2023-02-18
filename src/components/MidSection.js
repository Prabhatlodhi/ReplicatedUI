import React from 'react'
import { ProfileInfo } from './ProfileInfo'
import { FileDocsContainer} from './FileDocsContainer'
import { SendMessage } from './SendMessage'
import { AppointmentCountInfo } from './AppointmentCountInfo'
export const MidSection = () => {
  return (
    <div className='mx-6'>
        <ProfileInfo/>
        <AppointmentCountInfo/>
        <SendMessage/>
        <FileDocsContainer/>
    </div>
  )
}
