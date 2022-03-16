import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {
  return (
    <div className='header'>
        <div className='header-container'>
            <h2 className='logo'>Where in the world?</h2>
            <div className='switch-mode'>
                <DarkModeOutlinedIcon />
                <h4>Dark Mode</h4>
            </div>
        </div>
    </div>

        
    
  )
}

export default Header