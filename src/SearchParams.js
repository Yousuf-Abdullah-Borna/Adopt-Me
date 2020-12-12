import React,{useState} from 'react';
import {ANIMALS} from '@frontendmasters/pet';
import useDropdown from './useDropdown';


//THIS COMPONENT IS USED FOR SEARCH OPTION
// WHERE WE WOULD TAKE INPUT FROM THE USER
// AND DISPLAY THE ANIMALS ON SUBMIT
const SearchParams = () =>{

const [location,setLocation] = useState('Seattle,WA');
//const [animal,setAnimal] = useState("dog");
//const [breed, setBreed] = useState("");
const [breeds, setBreeds] = useState([]);

const [animal, AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
const [breed, BreedDropdown] = useDropdown("Breed","",breeds);

return (

    <div className="search-params">
           
        <form>
    
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


    </div>
)


}

//HELPS TO MAKE THIS COMPONENT MODULAR SO THAT IT CAN BE USED IN OTHER COMPONENTS
export default SearchParams;