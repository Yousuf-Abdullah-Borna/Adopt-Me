import React, { useState } from 'react';


//THIS HOOK HELPS TO MAKE REUSEABLE DROPDOWN HOOKS
//NEEDS LABEL, DEFAULTSTATE AND OPTION AS A PARAMETER
//IT RETURNS STATE,SETSTATE AND DROPDOWN COMPONENT
const useDropdown = ( label,defaultState, options ) =>{

  const [state, setState] = useState(defaultState);

  const id = `use-dropdown - ${label.replace(" ","").toLowerCase()}`;

  const Dropdown = () =>(

    
         <label htmlFor={id}>
         
          {label}

          <select
          
          id={id}
          value={state}
          onChange = { e =>{ setState(e.target.value)}}
          onBlur = { e =>{ setState(e.target.value)}}
          disabled= {options.length === 0}
          
          >

                    <option>All</option>

                    {options.map( item=>(

                    <option key={item} value= {item}>{item}</option>


                    ))}


          </select>




         </label>
    );
           

  

return [state,Dropdown, setState];


};


export default useDropdown;