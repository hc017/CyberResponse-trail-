import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
<<<<<<< HEAD
import Footer from './components/Footer/Footer';
=======
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';
=======
import Footer from './components/Footer/Footer';
>>>>>>> 23f2066d21f78a1c5d3c09f602fa03b5ffca1648
>>>>>>> 17c11c5ed21035b53ce4edd04298295b482839f5


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
