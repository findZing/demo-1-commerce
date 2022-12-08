import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import {HiSearch} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {GrCart} from 'react-icons/gr'
import {AiFillCaretLeft} from 'react-icons/ai'

import logo from '../public/logo-text.png'
import ItemNavBar from './ItemNavBar';

import { navBarData } from '../data/dummy';
import { contentItemNavbar } from '../data/dummy';

import BoxNavBar from './BoxNavBar';

import {useSelector} from 'react-redux'

function NavBar() {

    const [changeNavBar, setChangeNavBar] = useState(false)
    const navBar = useRef(null)

    // const {openBox} = useSelector(state => state.navBar)

    const showListContent = () => {
        return ['Bản mobile', 'Giới thiệu', 'Sản phẩm đã xem', 'Trung tâm bảo hành', 'Hệ thống 124 siêu thị', 'Tuyển dụng', 'Tra cứu đơn hàng', 'Đăng nhập'].map((item, i) => {
            return (
                <div key={i} className='text-white text-[13px] hover:text-hover'>
                    {item}
                </div>
            )
        })
    }

    const showListContentNavBar = () => {
        const arrayIcon = navBarData[0]
        const arrayText = navBarData[1]

        return arrayIcon.map((item, i) => {
                    return (
                        <ItemNavBar key={i} text={arrayText[i]} icon={() => (item ? item() : null)} change={changeNavBar} content={contentItemNavbar[i]}/>
                    )
                    
                })
    }

    const handleScroll = (e) => {
        let scrollTop = window.scrollY
        if(scrollTop > 120 && !changeNavBar) setChangeNavBar(true)
        else if(scrollTop < 120) setChangeNavBar(false)
        console.log(scrollTop)
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])

    return (
        <div className='w-full'>
            <div className='w-full bg-primary h-[30px]'>
                <div className='max-w-window w-full mx-auto flex flex-row justify-end gap-[12px] py-[6px]'>
                    {showListContent()}
                </div>
            </div>

            <div className='max-w-window w-full mx-auto h-[90px] py-[20px] flex flex-row items-center justify-between'>
                <div className='w-[256px] h-[37px] cursor-pointer'>
                    <Image
                        src={logo}
                        alt='img'
                        className='w-full h-full object-contain'
                    />
                </div>
                <div className='w-[669px] h-[40px] drop-shadow-primary bg-white rounded-[20px] px-[10px] py-[5px] relative'>
                    <input
                        type='text'
                        className='focus:outline-none w-full h-full text-[14px] font-[500]'
                        placeholder='Hôm nay bạn cần tìm gì?'
                    />
                    <button className='w-[42px] h-[42px] py-[6px] bg-primary rounded-[17px] absolute right-[8px] bottom-[8px] bg-gradient-to-b from-[#00917a] to-[#00483d] flex justify-center items-center'>
                        <HiSearch color='white' size={20}/>
                    </button>
                </div>

                <Link
                    className='w-[126px] h-[44px] bg-primary hover:bg-hover rounded-[10px] px-[8px] py-[6px] flex flex-row items-center justify-center gap-[8px] text-white drop-shadow-primary'
                    href='/'
                >
                    <TbTruckDelivery size={40}/>
                    <span className='text-[12px]'>
                        Kiểm tra đơn hàng
                    </span>
                </Link>
                 
                 <div className='flex flex-row'>
                    <GrCart size={40} color='#00483D'/>
                    
                    <label className='flex flex-row justify-between items-center gap-0'>
                        <AiFillCaretLeft color='#FF6801'/>
                        <span className='w-[24px] h-[24px] bg-orange p-[6px] text-[12px] text-white rounded-[4px] flex justify-center items-center ml-[-5px]'>
                            0
                        </span>
                    </label>
                 </div>
            </div>
            <div  className={`${changeNavBar ? 'w-full bg-primary h-[37px] fixed top-0 right-0 left-0': 'max-w-window w-full mx-auto bg-primary h-[63px] rounded-[8px] drop-shadow-primary relative'}
                            flex flex-row items-center justify-center z-10`}>
                {showListContentNavBar()}
                
                {/* {openBox && <BoxNavBar />} */}
            </div>
        </div>
    )
}

export default NavBar
