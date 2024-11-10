import { AppSidebar } from '@/components/app-sidebar'
import TopNavBar from '@/components/top-nav-bar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <TopNavBar/>
                <div className='bg-[#F5F6FA]'>
                {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default layout