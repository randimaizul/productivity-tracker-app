import Link from 'next/link'
import React from 'react'
import NavbarButton from './NavbarButton'

const Navbar = (): React.ReactElement  => {
    return (
        <div className="navbar bg-base-300 rounded-xl">
            <div className="container flex mx-auto justify-between p-4">
                {/* <Link href="/" className="btn btn-primary text-xl">Home</Link> */}
                <Link href="/" className="text-xl font-bold">Home</Link>
                <NavbarButton />
            </div>
        </div>
    )
}

export default Navbar