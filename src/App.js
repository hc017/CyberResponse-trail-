import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/Navbar/AllRoutes';
import firebaseApp from './FirebaseCongfig/FirebaseConfig';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ReportRoutes from './Pages/ReportIncident/ReportRoutes';

function App() {
  return (
    <Router>
      <Navbar/>
      <AllRoutes />
      <ReportRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;
