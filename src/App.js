import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <AllRoutes />
    </Router>
  );
}

export default App;
