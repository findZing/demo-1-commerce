
import React, { useEffect, useRef } from 'react';

import { setOpenBox } from '../reducers/navBar'
import { useDispatch, useSelector } from 'react-redux'

import BoxNavBar from './BoxNavBar';
import Link from 'next/link';

import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString';

function ItemNavBar({ text, icon, change, content}) {
    const navbar = useRef(null)
    const dispatch = useDispatch()
    const { openBox, title } = useSelector(state => state.navBar)

    useEffect(() => {
        const navBarRef = navbar.current

        const handleMouseEnter = () => {
            console.log('enter', text)
            dispatch(setOpenBox({ open: true, title: text}))
        }

        const handleMouseLeave = () => {
            console.log('leave', text)
            dispatch(setOpenBox({ open: false, title: text}))
        }

        navBarRef.addEventListener('mouseenter', handleMouseEnter)
        navBarRef.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            navBarRef.removeEventListener('mouseenter', handleMouseEnter)
            navBarRef.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])
    return (
        <div ref={navbar}>
        <Link href={`/${formatVietnameseToString(text)}`}>
            {change ? (
                <div className='flex flex-row items-center gap-[4px] text-white px-[8px] cursor-pointer'>
                    <div>{icon()}</div>
                    <div className='text-[12px]'>{text}</div>
                </div>
            )
                :
                (
                    <div className='flex flex-col items-center text-white px-[12px] cursor-pointer hover:hover-button-b'>
                        <div className='text-[30px]'>{icon()}</div>
                        <div className='w-full text-[10px] uppercase '>{text}</div>
                    </div>
                )}
            {openBox && title === text && <BoxNavBar change={change} content={content}/>}
        </Link>
        </div>
    )
}

export default ItemNavBar