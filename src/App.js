import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/Navbar/AllRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AuthProvider } from "./FirebaseCongfig/AuthContext"; // Update the path accordingly
import ReportRoutes from "./Pages/ReportIncident/ReportRoutes";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === "/adminDashboard";

  return (
    <>
      {/* Render Navbar and Footer for all routes except AfterSignUpForm and AddProjectForm */}
      {!isDashboard && <Navbar />}
      <AuthProvider>
        {" "}
        {/* Wrap your entire application with AuthProvider */}
        <AllRoutes />
        <ReportRoutes />
      </AuthProvider>
      {!isDashboard && <Footer />}
    </>
  );
}
export default App;
