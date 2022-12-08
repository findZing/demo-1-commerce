
import Link from 'next/link';
import React from 'react';

function ContentList({title, href}) {

    return (
        <Link
            href={href}
            className='relative w-[350px] h-[30px] bg-primary content-list border-l-[30px] border-l-[#009981] text-[14px] font-[700] text-white pt-[5px] pr-[60px] pb-[6px] pl-[35px]'
        >
            {title}
        </Link>
    )
}

export default ContentList;