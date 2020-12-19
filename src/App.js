import React from 'react';
import { render } from 'react-dom';
import { Router,Link } from '@reach/router';
import  Pet  from './Pet';
import SearchParams from './SearchParams';
import Details from './Details';



//APP COMPONENT IS REPRESENTING THE WHOLE APPLICATION
//AND HERE WE HAVE INCLUDED THE OTHER COMPONENTS LIKE PET
//WHICH WOULD BE A PART OF THE 
const App = () => {
  return (

    <div>
     
      <header>
          
          <Link to="/">Adopt me!</Link>
          </header>
     
      <Router>
      <SearchParams path="/"/>
      <Details path="/details/:id"/>
      </Router>
      
    </div>

  )
}

//render the app
render(<App/>, document.getElementById("root"));
