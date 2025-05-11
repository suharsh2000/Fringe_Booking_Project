import React, { Component, Suspense } from 'react'
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowsDashboard from './components/ShowDashboard';

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense>
          <Routes>
            <Route exact path="/" name="Home Page" element={<Home />} />
            <Route path="/login" name="Login Page" element={<Login />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
