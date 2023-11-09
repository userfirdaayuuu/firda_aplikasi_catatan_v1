import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import './style/homePage.css'
import First from './components/first';
import Memos from './components/testing';

function App() {
  return (
    <div>
      <div className='theBG'>
        <Navigation />
        <First />
        <Memos />
      </div>
    </div>
  )
}

export default App;
