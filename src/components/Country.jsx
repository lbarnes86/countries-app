import React from 'react'

function Country({ darkMode }) {
  return <div className={`country ${darkMode ? 'darkMode' : ''}`}>
      <div className='flag-container'>
          <img src='https://flagcdn.com/us.svg' alt='' />
      </div>

      <div className='details'>
          <h3 className='name'>Name</h3>
          <p>
              Population:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
          </p>
          <p>
              Region:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
          </p>
          <p>
              Capital:{' '}
          <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
          </p>
       
      </div>

  </div>
  
}

export default Country