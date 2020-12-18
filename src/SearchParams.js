import React,{useState, useEffect} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results  from './Results';


//THIS COMPONENT IS USED FOR SEARCH OPTION
// WHERE WE WOULD TAKE INPUT FROM THE USER
// AND DISPLAY THE ANIMALS ON SUBMIT
const SearchParams = () =>{

const [location,setLocation] = useState('Seattle,WA');
//const [animal,setAnimal] = useState("dog");
//const [breed, setBreed] = useState("");
const [breeds, setBreeds] = useState([]);

const [animal, AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
const [breed, BreedDropdown, setBreed] = useDropdown("Breed","",breeds);

const [pets,setPets] = useState([]);


async function requestPets(){

  const {animals} = await pet.animals({
    location,
    breed,
    type:animal
  })

  setPets(animals ||[]);

}

  


//AFTER THE RENDER HAPPENS USEFFECT WILL BE EXECUTED
useEffect( () =>{

   setBreeds([]);
   setBreed("");

   pet.breeds(animal).then(({ breeds}) =>{

     const breedStrings = breeds.map(({name}) => name);
     setBreeds(breedStrings);

   }, console.error);
   
}, [animal,setBreed,setBreeds]);



return (

    <div className="search-params">
           
        <form onSubmit= {(e) =>{

          e.preventDefault();
          requestPets();
        }}>
    
            <label htmlFor="location">
              Location
              <input id="location" 
              value={location} 
              placeholder="Enter a location" 
              onChange= {e => setLocation(e.target.value)}/>
            
            
            </label>

            <AnimalDropdown/>
            <BreedDropdown/>
        
            


            <button>
                Submit
            </button>

        </form>
        <Results pets = {pets}/>

    </div>
)


}

//HELPS TO MAKE THIS COMPONENT MODULAR SO THAT IT CAN BE USED IN OTHER COMPONENTS
export default SearchParams;