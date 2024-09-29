/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from './../assets/Images/logo.png';
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ];

    return (
        <div className='flex items-center justify-between p-5 w-full'>
            {/* Left side: Logo and menu */}
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
                
                {/* Desktop Menu */}
                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className='flex item-center md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={index} name={''} Icon={item.icon} />
                    ))}

                    <div className='relative' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && (
                            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3'>
                                {menu.map((item, index) => index > 2 && (
                                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right side: Profile image */}
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full'
                alt='Profile'
            />
        </div>
    );
}

export default Header;
