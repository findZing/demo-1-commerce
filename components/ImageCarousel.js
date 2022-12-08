
import React, { useState, useRef } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

// import { postersData } from '../data/dummy';
import poster1 from '../public/poster-1.jpg';
import poster2 from '../public/poster-2.jpg';
import poster3 from '../public/poster-3.jpg';
import poster4 from '../public/poster-4.jpg';

function ImageCarousel({data}) {
    const [click, setClick] = useState(0)
    const slider = useRef(null)

    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: false
    }

    const handleClickBtnContent = (i) => {
        slider.current.slickGoTo(i)
        setClick(i)
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

    const showImage = () => {

        return data.map((item, i) => {
            return (
                <div className='w-[1200px] h-[375px] flex items-center justify-center px-0 rounded-[16px]'>
                    <Image
                        key={i}
                        src={item.content.img == 'poster1' ? poster1 : item.content.img == 'poster2' ? poster2 : item.content.img == 'poster3' ? poster3 : poster4}
                        className='w-[1200px] h-[375px] object-cover '
                    />
                </div>
            )
        })
    }

    const showContentImage = () => {
        return data.map((item, i) => {
            return (
                <div onClick={() => handleClickBtnContent(i)}
                    className={`${i === click ? 'h-[57.6px] bg-gradient-to-r from-[#009981] to-[#00483d] text-white' : ' h-[37.6px] mt-[10px] hover:h-[57.6px] hover:mt-0 bg-white text-[#666666]'} 
                w-[295px] drop-shadow-primary rounded-[8px] cursor-pointer text-[13px] font-[500] flex items-center px-[15px] py-[10px]`}>
                    <p>{item.content.content}</p>
                </div>
            )
        })
    }

    const handleSwipe = (direction) => {
        
        if(direction == 'left') {

            if (click + 1 > 3) {
                setClick(0)
            }
            else {
                setClick(i => i + 1)
            }
        }
        else if (direction == 'right')
        {
            if (click - 1 < 0) {
                setClick(3)
            }
            else {
                setClick(i => i - 1)
            }
        }
    }

    return (
        <div className='max-w-window w-full  relative mb-[10px]'>
            <Slider ref={slider} {...setting} onSwipe={handleSwipe} className='w-full h-[375px] rounded-[16px] mt-[16px]'>
                {showImage()}
            </Slider>

            <div className='w-full h-[65px] mt-[8px] overflow-x-scroll flex flex-row items-center justify-between no-scroll-bar'>
                {showContentImage()}
            </div>

            <div onClick={handleClickPrev} className='absolute left-[5%] top-[50%] w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#C2C2C273] hover:bg-[#E6E4E473] cursor-pointer'>
                <AiFillCaretLeft color='white' size={20} />
            </div>

            <div onClick={handleClickNext} className='absolute right-[5%] top-[50%] w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#C2C2C273] hover:bg-[#E6E4E473] cursor-pointer'>
                <AiFillCaretRight color='white' size={20} />
            </div>
        </div>
    )
}

export default ImageCarousel