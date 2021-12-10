import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment></Appointment>
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              }
            >
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>

            <Route path="/home" element={<Home />}></Route>
            <Route exact path="/" element={<Home />}>
              <Home />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
