import React from 'react';
import BgPhoto from '../../Photo/bg2.jpg';
import './Background.css'
import Logo from './../../Photo/logo.png'
const Background = () => {
    return (
        <div className>
            <div className="text-center img-div">
            <img className="img-bg img-fluid" src={BgPhoto} alt="" />
            
                <div className="item-centered pt-4">
                <h2 >EPL Hunt</h2>

               <p>English Premier League Team List</p>
               <img src={Logo} alt=""/>
                </div>
          </div>
            
       
        </div>
    );
};

export default Background;