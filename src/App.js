import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="content">
        <Home></Home>
      </div>

      <div className="carousel">
        <Carousel></Carousel>
      </div>
    
    </div>
  );
}

export default App;
