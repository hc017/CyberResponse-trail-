import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';





function App() {
  return (
    <Router>
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
