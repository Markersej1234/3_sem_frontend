import { useState } from "react";
import facade from "../apiFacade";

const CreateDinnerevent = () => {
  const dinnereventInfo = { time: "", lacation: "", dish: "", pricePerPerson: "" };
  const [dinnerevent, setDinnerevent] = useState(dinnereventInfo);

  const createDinnerevent = (evt) => {
    evt.preventDefault();
    fetch(
        "http://localhost:8080/CA2_war_exploded/api/event/create" ,
        facade.makeOptions("POST", true,dinnerevent)
      )
        .then((response) => response.json())
        
  };

  const onChange = (evt) => {
    setDinnerevent({
      ...dinnerevent,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Create Dinnerevent</h2>
<form onChange={onChange}>
<input placeholder="time" id="time"/>
<input placeholder="lacation" id="lacation"/>
<input placeholder="dish" id="dish"/>
<input placeholder="pricePerPerson" id="pricePerPerson"/>
<button onClick={createDinnerevent}>Create Dinnerevent</button>



</form>


  </div>;
};

export default CreateDinnerevent;