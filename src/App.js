import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/Navbar/AllRoutes";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./FirebaseCongfig/AuthContext"; // Update the path accordingly
import ReportRoutes from "./Pages/ReportIncident/ReportRoutes";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Navbar/Header";
// import { footbase } from "./components/Footer/footbase";

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
      {!isDashboard && <Header />}
      <AuthProvider>
        {" "}
        {/* Wrap your entire application with AuthProvider */}
        <AllRoutes />
        <ReportRoutes />
      </AuthProvider>
      {/* {!isDashboard && <Footer />} */}
      {!isDashboard && <Footer />}
    </>
  );
}
export default App;
