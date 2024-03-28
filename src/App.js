import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
<<<<<<< HEAD
// import firebaseApp from './FirebaseCongfig/FirebaseConfig';
=======
// import firebaseApp from './firebaseConfig';
>>>>>>> c47726e6e669b0fb3667a1b9cbb3b55300d71e6d
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
