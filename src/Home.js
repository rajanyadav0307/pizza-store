import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import MenuDisplay from './components/MenuDisplay';
import ProductComponent from './components/ProductComponent';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <MenuDisplay/>
            <ProductComponent/>
    
            {/*<Footer/>*/}
        </div>
    )
}

export default Home;
