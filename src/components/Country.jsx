import React from 'react'

function Country({ darkMode, name, population, region, capital, flag, showDetails, code}) {
    const showDetailsInfo = () => {
        showDetails(code);
    }

  return <div className={`country ${darkMode ? 'darkMode' : ''}`} onClick={showDetailsInfo}>
      <div className='flag-container'>
          <img src={flag} alt='' />
      </div>

      <div className='details'>
          <h3 className='name'>{name}</h3>
          <p>
              Population:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>{population}</span>
          </p>
          <p>
              Region:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>{region}</span>
          </p>
          <p>
              Capital:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>{capital}</span>
          </p>
       
      </div>

  </div>
  
}

export default Country