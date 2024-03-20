import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



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
