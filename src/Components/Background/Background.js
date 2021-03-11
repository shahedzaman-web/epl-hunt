import React from 'react';
import BgPhoto from '../../Photo/bg2.jpg';
import './Background.css'
import Logo from './../../Photo/logo.png'
const Background = () => {
    return (
        <div>
            <div className="text-center img-div">
            <img className="img-bg" src={BgPhoto} alt="" srcset=""/>
            
                <div className="item-centered">
                <h2 >EPL Hunt</h2>

               <p>English Premier League Team List</p>
               <img src={Logo} alt=""/>
                </div>
          </div>
            
       
        </div>
    );
};

export default Background;