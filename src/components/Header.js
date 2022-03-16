import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode'

function Header() {
  return (
    <div className='header'>
        <div className='header_container'></div>
        <h2 className='logo'>Where in the world?</h2>
        <div className='switch_mode'></div>
        <DarkModeIcon />
        <h3>Dark Mode</h3>
    
    </div>
  )
}

export default Header