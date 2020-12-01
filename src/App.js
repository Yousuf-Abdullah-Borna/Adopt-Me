import React from 'react';
import { render } from 'react-dom';
import  Pet  from './Pet';
import SearchParams from './SearchParams';


//APP COMPONENT IS REPRESENTING THE WHOLE APPLICATION
//AND HERE WE HAVE INCLUDED THE OTHER COMPONENTS LIKE PET
//WHICH WOULD BE A PART OF THE 
const App = () => {
  return (

    <div>
      <h1>Adopt me!</h1>
      <SearchParams/>
      
    </div>

  )
}

//render the app
render(<App/>, document.getElementById("root"));
