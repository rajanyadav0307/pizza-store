import React from 'react';
import './Banner.css';

function Banner()
{
    function truncate(string,n)
    {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;

    }
    return (
    <header 
    className="banner" 
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        backgroundPosition:"center center",
    }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">Every bite<br/>Tastes Cheese!</h1>
            <div className="banner_buttons">
                {/* 
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                */}
                
            </div>
            <h1 className="banner_description">{truncate('Probably, The Best Pizza in Your Town.',150)}</h1>
        </div>
        <div className="banner_fadeBottom"/>



    </header>
    );
}

export default Banner;