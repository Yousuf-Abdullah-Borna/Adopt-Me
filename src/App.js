
const Pet = ({id,name,age}) => {

    return React.createElement(

    "div",
    {},
    React.createElement( "h1", {}, id),
    React.createElement( "h3", {}, name),
    React.createElement( "h1", {}, age)
    



    )

     
}







//component
const App = () => {

    return React.createElement(

    "div",
    {},
    React.createElement( "h1", {}, "Adopt Me!"),
    React.createElement(Pet, {id:"1",name:"Sam",age:15}),
    React.createElement(Pet,{id:"2",name:"Kam",age:16}),
    React.createElement(Pet,{id:"3",name:"em",age:17})




    )

     
}


//render the app
ReactDOM.render(React.createElement(App), document.getElementById("root"))