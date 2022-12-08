
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ItemProduct({image, content, price, oldPrice, promotion, imgOutStanding, isCarousel}) {
    console.log(image)
    return (
        isCarousel ? (
            <Link 
                href='/'
                className='w-[220px] bg-white flex flex-col items-center gap-[4px]'
            >
                <div className='w-[180px] h-[225px]'>
                    <Image
                        src={image}
                        className='w-full h-full object-contain'
                    />
                </div>

                <p className='text-[13px] font-[700] hover:text-hover text-center cursor-pointer'>{content}</p>
                <div className='w-full flex flex-row items-center justify-center gap-[12px]'>
                    <span className='text-[18px] font-[700] text-price'>{price} <span className='underline'>đ</span></span>
                    {oldPrice !== 0 && <span className='text-[15px] font-[400] line-through'>{oldPrice} <span className='underline'>đ</span></span> }
                </div>
                <div>
                    <span className='w-[26.26px] h-[20.4px] drop-shadow-primary rounded-[4px] bg-orange-yellow text-[11px] text-white px-[5px] py-[3px]'>KM</span>
                    <label title={promotion} className='text-[13px]'> {promotion.substring(0, 35)}... </label>
                    <span className='text-[13px] text-orange-yellow font-[700]'>VÀ 3KM KHÁC</span>
                </div>
            </Link>
        ) 
        : 
        (
            <Link 
                href='/'
                className='w-[230px] px-[10px] py-[30px] bg-white flex flex-col items-center gap-[4px] drop-shadow-primary rounded-[8px]'
            >
                <div className='w-[180px] h-[225px]'>
                    <Image
                        alt='img'
                        src={image}
                        width={180}
                        height={225}
                        className='object-contain'
                    />
                </div>

                <p className='text-[13px] font-[700] hover:text-hover text-center cursor-pointer '>{content}</p>
                <div className='w-full flex flex-row items-center justify-center gap-[12px]'>
                    <span className='text-[18px] font-[700] text-price'>{price} <span className='underline'>đ</span></span>
                    {oldPrice !== 0 && <span className='text-[15px] font-[400] line-through'>{oldPrice} <span className='underline'>đ</span></span> }
                </div>
                <div>
                    <span className='w-[26.26px] h-[20.4px] drop-shadow-primary rounded-[4px] bg-orange-yellow text-[11px] text-white px-[5px] py-[3px]'>KM</span>
                    <label title={promotion} className='text-[13px]'> {promotion.substring(0, 35)}... </label>
                    <span className='text-[13px] text-orange-yellow font-[700]'>VÀ 3KM KHÁC</span>
                </div>
            </Link>
        )
    )
}

export default ItemProduct