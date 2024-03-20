import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
import 


function App() {
  return (
    <Router>
      <AllRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
