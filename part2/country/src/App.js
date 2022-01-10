import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((res) => {
      setCountries(res.data)
      // console.log(res.data)
    })
  }, [])

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()))
  // console.log(filteredCountries.length)

  const ShowResults = ({filteredCountries}) => {
    const country = filteredCountries[0]
    if (filteredCountries.length  === 1) {
      return (
        <div key={country.name}>
          <h1>{country.name}</h1>
          <div> capital:{country.capital}</div>
          <div>population:{country.population}</div>
          <h1>languages </h1>
          <ul>
            {country.languages.map(language => <li>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt={country.name} width='20%'/>

        </div>
      )
    }
    if (filteredCountries.length > 10) return <div>Too many matches, specify another filter</div>; 
    return filteredCountries.map(country => {
      return (
        <div key={country.name}>
          {/* {country.name} <button value={country.name} onClick={(e) => console.log(e.target.value)}>show</button> */}
          {country.name} <button value={country.name} onClick={(e) => setSearchFilter(e.target.value)}>show</button>
        </div>
      )
    })
  }

  return (
    <div>
    search countries <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      {/* {countries.map(country => <div key={country.name}>{country.name}</div>)} */}
      {/* {filteredCountries.map(country => <div key={country.name}>{country.name}</div>)} */}
      <ShowResults filteredCountries={filteredCountries} />
    </div>
  )

  
}




export default App;