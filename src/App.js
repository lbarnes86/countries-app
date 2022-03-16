import './App.css';
import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
      <Route path='/' 
      element={
        <div className='app-body'>
        <div className='inputs'>
          <div className='search-input'>
            <SearchIcon />
            <input type='text' placeholder='Search for a country...' />
          </div>
          <div className='select-region'>
            <select>
              <option>All</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
              
            </select>
          </div>
        </div>
        <div className='countries'>
          <Country />
        </div>
      </div>
      } 
      />
      <Route path='country-details' element={<CountryDetails />}/>

    </Routes>
     
    </div>
  );
}

export default App;
