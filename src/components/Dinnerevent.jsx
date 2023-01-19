import facade from "../apiFacade";
import React, { useEffect, useState } from "react";


const Dinnerevent = () => {

  const [dinnerevent, setDinnerevent] = useState(null); 
  
  
  useEffect(() => {
      fetch(
        "http://localhost:8080/CA2_war_exploded/api/event/all",
      )
        .then((response) => response.json())
        .then((data) => {
          setDinnerevent(data);
          console.log(data)
        });
    }, []);
  
  
    return (
      <div>
       {dinnerevent &&
        dinnerevent.map((dinnerevent) => (
          <div>
            <ul>
              <li>
                Time: {dinnerevent.time}, Lacation: {dinnerevent.lacation},
                Dish: {dinnerevent.dish}, PricePerPerson: {dinnerevent.pricePerPerson}
              </li> 
            </ul>
          </div>
        ))}
  
    </div>
  );
  };


export default Dinnerevent;