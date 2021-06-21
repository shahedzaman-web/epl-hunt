import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import MalePhoto from './../../Photo/male.png';
import FemalePhoto from './../../Photo/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin,faFlag,faFutbol,faVenusMars,faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Details.css'


const Details = () => {
    const {strTeam}= useParams();
    
    const [details,setDetails]=useState({});
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${strTeam}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetails(data.teams[0]));
        console.log(details)
    },[strTeam])
   
   const {strCountry,strSport,strGender,strDescriptionEN,strFacebook,strTwitter,strInstagram,strYoutube,intFormedYear,strTeamBadge,strTeamBanner}=details;

    return (
  
        <div className="p-3 details-bg ">
            <div className=" rounded shadow info-box p-3 m-5">
                 <div >
                    <img className="img-fluid" src={strTeamBadge} alt="" srcset=""/>
                </div>
                <div className="p-5 ">
                <p> <FontAwesomeIcon icon={faChevronRight} />Team:  {strTeam}</p>
                    <p> <FontAwesomeIcon icon={faMapPin} /> Founded: {intFormedYear}</p>
                    <p> <FontAwesomeIcon icon={faFlag} />Country: { strCountry}</p>
                    
                    <p> <FontAwesomeIcon icon={faFutbol}/>Sports Type: {strSport }</p>
                    <p> <FontAwesomeIcon icon={faVenusMars} /> Gender: { strGender}</p>
                    
                   
                </div>
                <div className="pt-3">
                     { strGender=== "Male" ? 
                        <img className="img-fluid" src={`${MalePhoto}`}  alt=""/> : <img className="img-fluid" src={`${FemalePhoto}`}  alt=""/>
                     }


                </div>
            </div>
       
        <div className="text-center details-div">
        <img className="img-centered" src={strTeamBanner} alt=""/>
            
                <div className="details-text">
                <p > {strDescriptionEN}</p>

               
                </div>
           

        </div>
        <div className='text-center pb-3 site-icon'>
        <a target='_blank' href={`https://${strFacebook}`} rel="noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a target='_blank' href={`https://${strTwitter}`} rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a target='_blank' href={`https://${strInstagram}`} rel="noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a target='_blank' href={`https://${strYoutube}`} rel="noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a> 
        </div>
        
        </div>
    );
};

export default Details;
