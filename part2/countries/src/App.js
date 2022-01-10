import React, {useEffect, useState} from 'react';
import axios from "axios";
import Country from './components/Country'


//todo
// 1. limit for 10 countries
// 2. less than 1 but more than 1 show query
// 3. show basic data when there is only 1 match
const App = () => {

  //states
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [ countriesFilter, setCountriesFilter] = useState([]);

  useEffect(() => {
    axios.get ('https://restcountries.com/v2/all').then((response) => {
      setCountries(response.data);
      // console.log(response.data);
    })
    
    .catch((error) => {
      console.log(error);
    });
  }, []);


  const searchCountry = (e) => {
    setCountry(e.target.value);
    setCountriesFilter(
      countries.filter(
        (country) =>
          country.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      )
    );
  };

  const showCountries = () => {
    if (countriesFilter.length === 0) return;
    if (countriesFilter.length === 1) {
      return <Country data={countriesFilter[0]} />;
    }
    return countriesFilter.map((country) => <p>{country.name}</p>);
  };

  // adding empty brackets as an arugment to prevent infinite loop
  // argument tells useEffect to only render if values have changed
  // only run on render because we are passing it an empty value
  return (
    <>
      <p>
        find countries {''}
        <input value={country} name="country" onChange={searchCountry}/>
      </p>
      {countriesFilter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        showCountries()
      )}
       {/* <code>{JSON.stringify(countries)}</code> */}
    </>
  )
}

export default App;


