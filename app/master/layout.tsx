import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import Sidebar from '@/components/global/Sidebar';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            
                <div className="flex">
                    <div className="flex-[1_1_0%] p-5 bg-base-300 min-h-lvh">
                        <Sidebar />
                    </div>
                    <div className="flex-[4_1_0%] p-5">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>
            
        </div>
    )
}

export default layout