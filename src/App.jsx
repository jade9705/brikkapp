import React, {useState, useEffect} from 'react';
import EstateList from "./components/estate-list/EstateList.jsx";
import EstateComparison from "./components/estate-comparison/EstateComparison.jsx";

import './App.scss';


const url = "https://estate-comparison.codeboot.cz/list.php";


function App() {
  const [estate, setEstate] = useState();
 
 
  const fetchEstates =  async () => {
    const response = await fetch(url);
    let data = await response.json();
    data = data.slice(0, 10);
    setEstate(data);
  } 

  useEffect(() => {
    fetchEstates()
  }, []);
 

  return (
    <div className="App">
      
    <header>
      <h1>Estate Comparison</h1>
    </header> 
    
     <EstateList 
     estateProps={estate}
     /> 

     <EstateComparison
     estateProps={estate}
      />
   
    </div>
  );
}

export default App;
