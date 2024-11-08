import LoginLeftImage from '@/assets/LoginLeftImage'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <LoginLeftImage />
            </div>
            <div>{children}</div>
        </div>
    )
}

export default layout