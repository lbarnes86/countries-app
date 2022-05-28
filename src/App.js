import { useState, useEffect, useRef } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();
  
  const countryUnlisted = countries.status || countries.message;

  const switchMode = () => (
    setDarkMode(prevState => !prevState)

  )

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    if (data.status === 404) {
      setCountries([]);
      return;
    }

    setCountries(data);
  };
  // console.log(countries)

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${searchValue}`)
        const data = await response.json();

        setCountries(data);
      }

      try {
        fetchSearch()
      } catch (error) {
        console.log(error)
      }
    } else {
      fetchData();
    }
  }

  const selectRegion = () => {
    const selectValue = regionRef.current.value;
    
    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(`https://restcountries.com/v2/region/${selectValue}`);
        const data = await response.json();

        if (selectValue === 'all') {
          try {
            fetchData()
          } catch (error) {
            console.log(error)
          }
          return;
        }

        setCountries(data);

      } 
      try {
        fetchSelect();
      } catch(error) {
        console.log(error)
      }

    }
  }

  const showDetails = (code) => {
    navigate(`/${code}`);
  }

  return ( 
    <div className={`app ${darkMode ? 'darkMode' : ''}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
      <Route path='/countries-app' 
      element={
        <div className='app-body'>
        <div className='inputs'>
          <div className={`search-input ${darkMode ? 'darkMode' : ''}`}>
            <SearchIcon />
            <input type='text' placeholder='Search for a country...' ref={countriesInputRef} onChange={searchCountries} />
          </div>
          <div className={`select-region ${darkMode ? 'darkMode' : ''}`}>
            <select ref={regionRef} onChange={selectRegion}>
              <option value='all'>Filter by Region</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
              
            </select>
          </div>
        </div>
        <div className='countries'>
        {!countryUnlisted ? (
          countries.map((country) => (
            <Country 
            darkMode={darkMode}
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
            showDetails={showDetails}
            />
          ))
        ) : (
          <p>No countries found...</p>
        ) }
        </div>
      </div>
      } 
      />
      <Route path='/:countryCode' 
      element={<CountryDetails darkMode={darkMode} countries={countries} refetch={fetchData} />}
      />

    </Routes>
     
    </div>
  );
}

export default App;
