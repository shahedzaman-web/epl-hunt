import React from "react";
import { useHistory } from "react-router";
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'


<i class="fas fa-long-arrow-alt-right"></i>
const Team = (props) => {
  
  const {
  strSport,
  strTeamBadge,
    strTeam
    
  } = props.team;

  const history = useHistory();
  const showDetails = (id) => {
    const url = `details/${strTeam}`;
    history.push(url);
    console.log(id);
  };



  return (
    <div className="card shadow rounded container my-5 card-bg" style={{width:'20rem'}}>

        <img className="card-img-top pt-2" src={strTeamBadge} alt="" />
        <div className="card-body text-center">
          <h1 className="team-name"> {strTeam}</h1>
          
          <p className="sports-type"> Sports Type {strSport}</p>
          <button className="btn btn-primary" onClick={() => showDetails(strTeam)}>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        </div>
       </div>
  );
};

export default Team;

