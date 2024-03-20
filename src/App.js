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
>>>>>>> 0e37ea9a8f35aa4d017922524ea023f5f0081b6f


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
