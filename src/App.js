import './App.css';
import Home from './components/Home';
import Users from './components/users';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/App2' element={<Home/>}/>
          <Route path='/App2/users' element={<Users/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
