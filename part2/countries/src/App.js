import React, {useEffect, useState} from 'react';
import axios from "axios";

import Countries from './components/Countries';
import Filter from './components/Filter'


const App = () => {

  //states
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  const countriesToShow = newFilter.length === 0 ? countries 
  : countries.filter(country => country.name.toLowerCase().indexOf(newFilter) >= 0)

  useEffect(() => {
    axios.get ('https://restcountries.com/v2/all').then((response) => {
      setCountries(response.data);
      // console.log(response.data);
    })
    
    .catch((error) => {
      console.log(error);
    });
  }, []);
    // adding empty brackets as an arugment to prevent infinite loop

  const handleFilterChange = (e) => setNewFilter(e.target.value.toLowerCase())

  return (
    <div>
      <Filter 
        handleFilterChange={(e) => {handleFilterChange(e) }}
      />

      <Countries 
        filter={ newFilter }
        countries={ countriesToShow }
        handleFilterChange={ (e) => { handleFilterChange(e)}}
      />
    </div>
  )
}

export default App;


