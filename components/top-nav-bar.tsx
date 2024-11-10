import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import SearchSVG from '@/assets/SearchSVG'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import navbarData from '@/data/navbarData'

const TopNavBar = () => {
    const { user } = navbarData;
    return (
        <div className='flex gap-3 py-4 pr-4 items-center justify-between'>
            <div className='flex items-center gap-3 w-2/3'>
                <SidebarTrigger />
                <div className='border border-1 rounded-3xl flex items-center gap-3 px-2 bg-[#F5F6FA] w-2/3'>
                    <SearchSVG />
                    <input placeholder='search' className='border-none h-8 outline-none text-xs font-light bg-[#F5F6FA] w-full' />
                </div>
            </div>
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-['12px'] bg-[#7551E9] flex items-center justify-center">
                    <AvatarImage src={user.avatar} alt={user.name} className='rounded-lg' />
                    <AvatarFallback className="rounded-lg">MS</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">admin</span>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar