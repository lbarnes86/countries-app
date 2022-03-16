import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode'

function Header() {
  return (
    <div className='header'>
        <div className='header-container'>
            <h2 className='logo'>Where in the world?</h2>
            <div className='switch-mode'>
                <DarkModeIcon />
                <h3>Dark Mode</h3>
            </div>
        </div>
    </div>

        
    
  )
}

export default Header