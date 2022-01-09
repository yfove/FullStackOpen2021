import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((res) => {
      setCountries(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      {countries.map(country => <div key={country.name}>{country.name}</div>)}
    </div>
  )
}


export default App;