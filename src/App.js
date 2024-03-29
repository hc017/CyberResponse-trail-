import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './FirebaseCongfig/AuthContext'; // Update the path accordingly

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrap your entire application with AuthProvider */}
        <Navbar/>
        <AllRoutes />
        <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
