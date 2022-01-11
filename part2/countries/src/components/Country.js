import React from 'react';

const Country = ({ data: { name, capital, population, flag, languages} }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Populatiion: {population}</p>
            <ul>
                {languages.map((language) => (
                    <li>{language.name}</li>
                ))}
            </ul>
            <img src={flag} alt={name} width="20%" />
        </>
    )
}

export default Country;