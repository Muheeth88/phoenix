
import './App.css';
import Footer from './End-User/Components/Footer/Footer';
import Navigation from './End-User/Components/Navigation/Navigation';
import HomePage from './End-User/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
