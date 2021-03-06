import React, { Component } from 'react'
import pet from '@frontendmasters/pet';


class Details extends Component{



    constructor(props){

        super(props);

         this.state = {

            loading: true

         };

        
    }





    //COMPONENTDIDMOUNT RUNS WHEN THE IT RENDERS FOR THE FIRST TIME
    //USUALLY USED FOR AJAX REQUEST
    componentDidMount(){
   
         pet.animal(this.props.id).then( ({animal}) =>{
            
        this.setState({

                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city},${animal.contact.address.state}`,
                    description: animal.description,
                    media:animal.photos,
                    breed:animal.breeds.primary,
                    loading:false
                })

         }, console.error)

    }


    render(){

       if(this.state.loading){
           return <h1>loading</h1>
       }

       const {animal, breed, location,description,name} = this.state;

       return (

            <div className="details">

                <div>
                <h1>{name}</h1>
                <h2>{ ` ${animal} -  ${breed} -  ${location}`}</h2>
                <button> Adopt {name}</button>
                
                </div>
            </div>

           


       )



    }
}

export default Details;