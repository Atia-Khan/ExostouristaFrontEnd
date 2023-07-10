

import './App.css';
import Navbar from './components/Navbar';
import ResultList from './components/ResultsList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
  <Navbar />
  <Search />
  <ResultList />
    </div>
  );
}

export default App;
