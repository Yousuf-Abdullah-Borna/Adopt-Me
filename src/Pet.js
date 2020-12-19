import React from 'react';


//THIS COMPONENT IS USED FOR PET
//AND IT USES PROPS LIKE NAME,ANIMAL,BREED
export default function Pet({ name, animal, breed,media,location,id }){
  
    let hero = 'http://placecorgi.com/300/300';

    if(media.length){
        
        hero = media[0].small;
    
    }


    return (
        <a href= {`/details/${id}`} className="pet">

           <div className="image-container">

               <img src={hero} alt={name}/>
           </div>

            <div className='info'>
                <h2>{` ${animal} - ${breed} - ${location}`}</h2>

            </div>


        </a>


    )

};
