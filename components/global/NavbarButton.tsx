"use client"
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import Link from 'next/link'

const NavbarButton = (): React.ReactElement  => {
    const { isLoaded, isSignedIn } = useUser();
    if(!isLoaded) return <p>Please wait..</p>

    return isSignedIn ? (
        <div className='flex items-center gap-4'>
            <Link href="/dashboard">Create Task</Link>
            <Link href="/dashboard/my-task">My Task</Link>
            <UserButton afterSignOutUrl="/" />
        </div>
    ) : (
        <Link href="/sign-in">Sign In</Link>
    )
}

export default NavbarButton