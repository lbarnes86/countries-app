import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, useNavigate } from 'react-router'


function CountryDetails({ darkMode, countries }) {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;
    
      country.currencies.forEach(currency => {
        currencies.push(currency.name)
      })
      country.languages.forEach(language => {
        languages.push(language.name)
      })
      country.borders?.forEach(border => {
        borders.push(border.name)
      })
      
     
    }
  });


  const goBack = () => {
    navigate('/');
  }



  return <div className='country-details'>
    <button className={`back ${darkMode ? 'darkMode' : ''}`} onClick={goBack}>
      <ArrowBackIcon />
      <p>Back</p>
    </button>
    <div className="country-details-body">
      <div className="img-container">
        <img src={flagImg} alt='' />
      </div>

      
      <div className="info">
        <h2>{name}</h2>
        <div className="info-container">
          <div className="left-side-info">
            <p>Native Name:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {nativeName}
              </span>
            </p>
            <p>Population:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {population}
              </span>
            </p>
            <p>Region:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {region}
            </span>
            </p>
            <p>Sub Region:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {subregion}
              </span>
            </p>
            <p>Capital:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {capital}
              </span>
            </p>
          </div>
          <div className="right-side-info">
            <p>Top Level Domain:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {topLevelDomain}
              </span>
            </p>
            <p>
              Currencies:{' '}
              {currencies.map(currency => {
                if (currencies.indexOf(currency) !== currencies.length -1) {
                  return (
                    <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                      {' '}
                      {currency},
                    </span>
                    )
                  } else {
                    return (
                      <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                      {' '}
                      {currency}
                    </span>
                    );
                  }
                })}
            
            </p>
            <p>Languages:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
              {languages}
              </span>
            </p>
          </div>
        </div>
        Border Countries:
        <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
          <p>{borders}
            
          </p>
        </div>
        <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
          <p>{borders}</p>
        </div>
        <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
          <p>{borders}</p>
        </div>
      </div>
      </div>
    </div>

  
}

export default CountryDetails