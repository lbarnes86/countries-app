import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams} from 'react-router'

function CountryDetails({ darkMode }) {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

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
        <img src='https://flagcdn.com/us.svg' alt='' />
      </div>

      
      <div className="info">
        <h2>Name</h2>
        <div className="info-container">
          <div className="left-side-info">
            <p>Native Name:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
            <p>Population:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
            <p>Region:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
            <p>Sub Region:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
            <p>Capital:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
          </div>
          <div className="right-side-info">
            <p>Top Level Domain:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
            <p>Currencies:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
            <p>Languages:{' '}
            <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
            </p>
          </div>
        </div>
        Border Countries:
        <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
          <p>Test</p>
        </div>
        <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
          <p>Test</p>
        </div>
        <div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
          <p>Test</p>
        </div>
      </div>
      </div>
    </div>

  
}

export default CountryDetails