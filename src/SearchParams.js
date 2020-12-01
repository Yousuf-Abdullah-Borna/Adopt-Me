import React,{useState} from 'react';


//THIS COMPONENT IS USED FOR SEARCH OPTION
// WHERE WE WOULD TAKE INPUT FROM THE USER
// AND DISPLAY THE ANIMALS ON SUBMIT
const SearchParams = () =>{

const [location,setLocation] = useState('Seattle,WA');

return (

    <div className="search-params">
           {location}
        <form>
    
            <label htmlFor="location">
              Location
              <input id="location" value={location} placeholder="Enter a location" onChange= {e => setLocation(e.target.value)}/>
            </label>
            <button>
                Submit
            </button>

        </form>


    </div>
)


}

//HELPS TO MAKE THIS COMPONENT MODULAR SO THAT IT CAN BE USED IN OTHER COMPONENTS
export default SearchParams;