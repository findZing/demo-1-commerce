
import Link from 'next/link'
import Image from 'next/image'

import React, { useEffect, useState } from 'react'

import { contentFooter } from '../data/dummy'

import logoVisa from '../public/logo-visa.png'
import logoMaster from '../public/logo-master.png'
import logoJcb from '../public/logo-jcb.png'
import logoSamsung from '../public/logo-samsungpay.png'
import logoAtm from '../public/logo-atm.png'
import logoVnpay from '../public/logo-vnpay.png'
import logoNhattin from '../public/nhattin.jpg'
import logoVnpost from '../public/vnpost.jpg'
import logoBct from '../public/logo-bct.png'

const Footer = () => {

    const showListContent = () => {
        return contentFooter.map((item, i) => {
            return (
                <div  key={i} className='flex flex-col w-[220px] max-[450px]:w-[150px]'>
                    <p className='text-[15px] text-[#DDDDDD] font-[700]'>{item.title}</p>
                    {
                        item.list.map((itemList, i) => {
                            return (
                                <Link
                                    key={i}
                                    href='/'
                                    className='text-[13px] text-[#DDDDDD]'
                                >
                                    {itemList}
                                </Link>
                            )
                        })
                    }
                </div>
            )
        })
    }


    return (
        <div className='bg-primary px-[20px] py-[10px] rounded-[16px] flex flex-col'>
            <div className='flex flex-row min-[900px]:justify-between max-[900px]:flex-col'>
                <div className='flex flex-row flex-wrap justify-between gap-[8px]'>
                    {showListContent()}
                </div>

                <div className='flex flex-row flex-wrap justify-between max-[900px]:gap-[8px] min-[900px]:gap-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[15px] text-[#DDDDDD] font-[700]'>T???ng ????i</p>
                        <div className='bg-white h-[30px] rounded-[8px] flex justify-center items-center px-[10px] py-[6px]'>
                            <span className='text-[18px] font-[800] text-primary'>1900.2091</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[15px] text-[#DDDDDD] font-[700]'>Thanh to??n mi???n ph??</p>
                        
                        <div className='flex flex-col items-center gap-[10px]'>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <Image 
                                    alt='img'
                                    src={logoVisa}
                                    className='w-[77px] h-[30px]'
                                />
                                <Image 
                                    alt='img'
                                    src={logoMaster}
                                    className='w-[77px] h-[30px]'
                                />
                            </div>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <Image 
                                    alt='img'
                                    src={logoJcb}
                                    className='w-[77px] h-[30px]'
                                />
                                <Image 
                                    alt='img'
                                    src={logoSamsung}
                                    className='w-[77px] h-[30px]'
                                />
                            </div>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <Image 
                                    alt='img'
                                    src={logoAtm}
                                    className='w-[77px] h-[30px]'
                                />
                                <Image 
                                    alt='img'
                                    src={logoVnpay}
                                    className='w-[77px] h-[30px]'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='text-[15px] text-[#DDDDDD] font-[700]'>H??nh th???c v???n chuy???n</p>
                        
                        <div className='flex flex-col items-center gap-[10px]'>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <Image 
                                    alt='img'
                                    src={logoNhattin}
                                    className='w-[77px] h-[30px]'
                                />
                                <Image 
                                    alt='img'
                                    src={logoVnpost}
                                    className='w-[77px] h-[30px]'
                                />
                            </div>
                            
                            <Image 
                            alt='img'
                            src={logoBct}
                            className='w-[160px] h-[61px]'
                            />
                        </div>
                    </div>
                </div>


            </div>

            <div className='flex flex-col items-center gap-[10px]'>
                <p className='text-[12px] text-white'>?? 2020. C??NG TY C??? PH???N X??Y D???NG V?? ?????U T?? TH????NG M???I HO??NG H??. MST: 0106713191. (????ng k?? l???n ?????u: Ng??y 15 th??ng 12 n??m 2014, ????ng k?? thay ?????i ng??y 29/12/2020)</p>
                <p className='text-[12px] text-white font-[700]'>GP s??? 426/GP-TT??T do s??? TTTT H?? N???i c???p ng??y 22/01/2021</p>
                <p className='text-[12px] text-white'>?????a ch???: 89 Tam Trinh, P. Mai ?????ng, Q. Ho??ng Mai, Th??nh ph??? H?? N???i. ??i???n tho???i: 1900.2091. Ch???u tr??ch nhi???m n???i dung: <span className='font-[700]'>Ho??ng Ng???c Chi???n</span>.</p>
            </div>
        </div>
    )
}

export default Footer