
import './App.css';
import Navigation from './End-User/Components/Navigation/Navigation';
import HomePage from './End-User/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
