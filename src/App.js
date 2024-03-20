import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
<<<<<<< HEAD
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

=======
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
>>>>>>> 81afe31aeeb21a7734063ad2be18bbb0e60de36a



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
