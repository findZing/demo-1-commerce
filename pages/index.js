import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import ImageCarousel from '../components/ImageCarousel';
import { increment } from '../reducers/count';

import content1 from '../public/content1.png'
import content2 from '../public/content2.jpg'
import content3 from '../public/content3.jpg'
import content4 from '../public/content4.jpg'
import Image from 'next/image';
import ProductCarousel from '../components/ProductCarousel';
import ListProduct from '../components/ListProduct';
import Layout from '../components/Layout';

import axiosConfig from '../axiosConfig';

export default function Home({dataImgCarousel, productData}) {
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  // console.log(dataImgCarousel)

  return (
    <div className='w-full my-[30px]'>

      <ImageCarousel data={dataImgCarousel}/>

      <div className='flex flex-row items-center justify-between mt-[20px] mb-[30px]'>
        <div className='w-[292.5px] h-[153.73px]'>
          <Image
            src={content1}
            className='w-full h-full object-contain rounded-[4px]'
          />
        </div>

        <div className='w-[292.5px] h-[153.73px]'>
          <Image
            src={content2}
            className='w-full h-full object-contain rounded-[4px]'
          />
        </div>

        <div className='w-[292.5px] h-[153.73px]'>
          <Image
            src={content3}
            className='w-full h-full object-contain rounded-[4px]'
          />
        </div>

        <div className='w-[292.5px] h-[153.73px]'>
          <Image
            src={content4}
            className='w-full h-full object-contain rounded-[4px]'
          />
        </div>
      </div>

      <ProductCarousel />

      <ListProduct title='APPLE AUTHORISED RESELLER' product='Apple' productData={productData}/>
      {/* <ListProduct title='APPLE AUTHORISED RESELLER'/>
      <ListProduct title='APPLE AUTHORISED RESELLER'/> */}
    </div>
  )
}

export async function getStaticProps() {

  const response = await fetch('https://638ccea2eafd555746af34e4.mockapi.io/api/v1/postersdt', {
    method: 'GET',    
  });

  const data = await response.json()

  const res = await fetch('https://638ccea2eafd555746af34e4.mockapi.io/api/v1/product')
  const productData = await res.json()

  // console.log(productData)
  return {
    props: {
      dataImgCarousel: data, 
      productData,
    }
  }
}