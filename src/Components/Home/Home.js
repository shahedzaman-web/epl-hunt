import React, { useEffect, useState } from "react";
import Team from "../Team/Team";

import "./Home.css";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    setIsLoading(true)
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams))
      .catch(err => {
        console.error(err);
      }).then(()=>{
         setIsLoading(false)
      });
  }, [teams]);

  return (
    <div className="team-bg">
   {!isLoading ?  <div className="text-center pt-4 ">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden" />
        </div>
      </div> :
      <div className="team-info p-2">
        {teams.map((team) => (
          <Team key={team.idTeam} team={team}></Team>
        ))}
      </div>
}
    </div>
        
  );
};

export default Home;
