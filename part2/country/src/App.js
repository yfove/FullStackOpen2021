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

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()))

  return (
    <div>
    search countries <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      {/* {countries.map(country => <div key={country.name}>{country.name}</div>)} */}
      {filteredCountries.map(country => <div key={country.name}>{country.name}</div>)}
    </div>
  )
}


export default App;