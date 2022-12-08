
import React from 'react';
import { useRef, useState } from 'react';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemProduct from './ItemProduct';

import phone1 from '../public/phone1.png'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

function ProductCarousel() {
    const [click, setClick] = useState(0)
    const slider = useRef(null)

    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
    }

    const handleClickNext = () => {

        if (click + 1 > 3) {
            slider.current.slickGoTo(0)
            setClick(0)
        }
        else {
            slider.current.slickGoTo(click + 1)
            setClick(i => i + 1)
        }
    }

    const handleClickPrev = () => {
        if (click - 1 < 0) {
            slider.current.slickGoTo(3)
            setClick(3)
        }
        else {
            slider.current.slickGoTo(click - 1)
            setClick(i => i - 1)
        }
    }

    const showListProduct = () => {
        return [1,2,3,4,5,6,7,8,9,10].map((item, i) => {
            return <ItemProduct 
                image={phone1}
                content='Samsung Galaxy Z Flip4 -128GB - Chính hãng'
                price='19,390,000'
                oldPrice='23,990,000'
                promotion='Nhận gói 6 tháng Apple Music miễn phí'
                imageOutStading=''
                isCarousel={true}
            />
        })
    }
    return (
        <div className='bg-white drop-shadow-primary w-full h-[362.5px] px-[50px] py-[10px] rounded-[12px] relative'>
            <Slider ref={slider} {...setting}>
                {showListProduct()}
            </Slider>

            <div onClick={handleClickPrev} className='absolute left-[10px] top-[50%] w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#C2C2C273] hover:bg-[#E6E4E473] cursor-pointer'>
                <AiFillCaretLeft color='white' size={20} />
            </div>

            <div onClick={handleClickNext} className='absolute right-[10px] top-[50%] w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#C2C2C273] hover:bg-[#E6E4E473] cursor-pointer'>
                <AiFillCaretRight color='white' size={20} />
            </div>
        </div>
    )
}

export default ProductCarousel