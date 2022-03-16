import './App.css';
import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
