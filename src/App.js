import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/GreenGardens"  element={<Home/>}></Route>
        <Route exact path="/contact" element={<><Contact/><Footer/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;