import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';
import Recommended from './Components/Recommended';
import Slide from './Components/Slide';
import Slider from './Components/Slider';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Offer />
      <Slider />
      <Slide />
      <Recommended />
    </div>
  );
}

export default App;
