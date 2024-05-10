// All images start
import React from 'react'
import logo from '../assets/logo.svg'
import main from '../assets/main.svg'
import mainProfile from '../assets/main profile.svg'
import person from '../assets/mijozlarBazasi.svg'
import smsTracking from '../assets/sms-tracking.svg'
import redirect from '../assets/direct-send.svg'
import rectangle from '../assets/rectangle.svg'
import selector from '../assets/Selector.svg'

function Header() {
    return (
        <header className='w-[1540px] flex items-center justify-between px-6 py-2 border border-l-0 border-r-0  mb-6'>
            <div className='logo'>
                <a href="#"> <img src={logo} alt="company logo" className='logo' /></a>
            </div>
            <div className='w-[800px] '>
                <ul className='header-ul flex items-center justify-between'>
                    <a href="#" className='hover:text-blue-500'><li className='flex items-center gap-2 justify-between'><img src={main} alt="main" />Asosiy</li></a>
                    <a href="#" className='hover:text-blue-500'><li className='flex items-center gap-2 justify-between'><img src={person} alt="img" />Mijozlar bazasi</li></a>
                    <a href="#" className='text-blue-500 hover:text-blue-500 relative'><li className='flex items-center gap-2 justify-between w-[151px] pb-3 pt-3'><img src={smsTracking} alt="img tracking" />Tracking loyihalari <img src={selector} className='absolute top-[53px] left-7' alt="" /></li></a>
                    <a href="#" className='hover:text-blue-500'><li className='flex items-center gap-2 justify-between'><img src={redirect} alt="redirect img" />Redirect loyihalari</li></a>
                </ul>
            </div>

            <div className='account flex items-center'>
                <span className='cursor-pointer mainProfile flex items-center gap-2.5'><img src={mainProfile} alt="" /><h4>Austin Robertson</h4><img src={rectangle} alt="" /></span>
            </div>
        </header >
    )
}

export default Header