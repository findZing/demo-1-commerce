
import React from 'react';
import NavBar from './NavBar';
import SocialMediaBox from './SocialMediaBox';
import Footer from './Footer';

function Layout({ children }) {

    return (
        <div className='bg-window flex flex-col'>
            
            <NavBar />

            <div className='max-w-window w-full mx-auto'>
                {children}

                <Footer />    
            </div>
            

            <SocialMediaBox />
        </div>
    )
}

export default Layout