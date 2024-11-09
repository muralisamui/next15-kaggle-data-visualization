import LoginLeftImage from '@/assets/LoginLeftImage'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center items-center'>
            <div>{children}</div>
            <div>
                <LoginLeftImage height='500' width="560"/>
            </div>
            
        </div>
    )
}

export default layout