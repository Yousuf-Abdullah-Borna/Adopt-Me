import React from 'react';
import { render } from 'react-dom';
import  Pet  from './Pet';


//component
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { id: "5", name: "Sam", age: 15 }),
    React.createElement(Pet, { id: "2", name: "Kam", age: 16 }),
    React.createElement(Pet, { id: "3", name: "em", age: 17 })
  );
};

//render the app
render(React.createElement(App), document.getElementById("root"));
