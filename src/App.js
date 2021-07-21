
import './App.css';
import Home from './components/title/title.jsx';
import NavBar from './components/navbar/navbar.jsx';
import Properties from './components/properties/properties.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div>
      <div>
          <NavBar/>
          <Home/>
          <Properties/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
