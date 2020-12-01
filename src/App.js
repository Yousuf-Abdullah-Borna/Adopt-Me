import React from 'react';
import { render } from 'react-dom';
import  Pet  from './Pet';


//component
const App = () => {
  return (

    <div>
      <h1>Adopt me!</h1>
      <Pet name="Sam" animal='Cat' breed='Havanesse'/>
      <Pet name="Pepper" animal='Bird' breed='Cockatiel'/>
      <Pet name="Doink" animal='Cat' breed='Mixed'/>
    </div>

  )
}

//render the app
render(<App/>, document.getElementById("root"));
