import React from 'react';


//THIS COMPONENT IS USED FOR PET
//AND IT USES PROPS LIKE NAME,ANIMAL,BREED
export default function Pet({ name, animal, breed,media,location,id }){
  


    return (
        <div>
             <h1>{name}</h1>
              <h2>{animal}</h2>
             <h2>{breed}</h2>


        </div>


    )

};
