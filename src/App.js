import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <AllRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
