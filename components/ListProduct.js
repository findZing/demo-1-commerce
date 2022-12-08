
import React from 'react';
import ContentList from '../components/ContentList';
import ItemProduct from './ItemProduct';


function ListProduct({title, product, productData}) {
    const listProduct = []
    productData.map((item) => {
        if(item.store.includes(product)){ listProduct.push(item)}
    })

    console.log('list', listProduct)
    const showListProduct = () => {

        return listProduct.length > 0 && listProduct.map((item, i) => {

            return <ItemProduct
                image={item.image[0]}
                content={item.name}
                price={item.price}
                oldPrice='23,990,000'
                promotion='Nhận gói 6 tháng Apple Music miễn phí'
                imageOutStading={title}
                isCarousel={false}
            />
        })
    }
    return (
        <div className='w-full my-[30px] flex flex-col gap-[20px]'>
            <ContentList title={title} href='/' />

            <div className='grid grid-cols-5 gap-[10px] max-[1200px]:grid-cols-4 max-[970px]:grid-cols-3'>
                {showListProduct()}
            </div>
        </div>
    )
}

export default ListProduct