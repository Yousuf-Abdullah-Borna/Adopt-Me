import React from 'react';

export default function Pet({ id, name, age }){
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, id),
    React.createElement("h3", {}, name),
    React.createElement("h1", {}, age)
  );
};
