import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const switchMode = () => (
    setDarkMode(prevState => !prevState)

  )

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error)
    }
  });

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    setCountries(data);
  };
  // console.log(countries)

  return (
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
      <Route path='/' 
      element={
        <div className='app-body'>
        <div className='inputs'>
          <div className={`search-input ${darkMode ? 'darkMode' : ''}`}>
            <SearchIcon />
            <input type='text' placeholder='Search for a country...' />
          </div>
          <div className={`select-region ${darkMode ? 'darkMode' : ''}`}>
            <select>
              <option>Filter by Region</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
              
            </select>
          </div>
        </div>
        <div className='countries'>
        {countries.map(country => (
            <Country darkMode={darkMode}
            key={country.alpha3Code}
            code={country.alpha3Code}
            name={country.name}
            nativeName={country.nativeName}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital}
            flag={country.flag}
            topLevelDomain={country.topLevelDomain}
            currencies={country.currencies}
            languages={country.languages}


            />
          ))}
        </div>
      </div>
      } 
      />
      <Route path='country-details' element={<CountryDetails darkMode={darkMode} />}/>

    </Routes>
     
    </div>
  );
}

export default App;
