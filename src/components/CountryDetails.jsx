import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CountryDetails() {
  return <div className='country-details'>
    <button className="back">
      <ArrowBackIcon />
      <p>Back</p>
    </button>
    <div className="div country-details-body">
      <div className="img-container">
        <img src='https://flagcdn.com/us.svg' alt='' />
      </div>
    </div>
  </div>
  
}

export default CountryDetails