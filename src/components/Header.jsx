import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header({ onClick, darkMode }) {
  return (
    <div className={`header ${darkMode ? 'darkMode' : ''}`}>
        <div className='header-container'>
            <h2 className='logo'>Where in the world?</h2>
            <div className='switch-mode' onClick={onClick}>
                <DarkModeOutlinedIcon />
                <h4>Dark Mode</h4>
            </div>
        </div>
    </div>

        
    
  )
}

export default Header