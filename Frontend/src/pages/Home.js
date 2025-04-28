import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import PageHeader from "../components/PageHeader";
import Login from "../pages/Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8081/user");
      setUsersData(res.data);
    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };
  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setIsRegisterClicked(false);
    setIsUserLogged(false);
    setIsAdminLogged(false);
  };

  const handleLogin = (loginData) => {
    if (loginData === "register") {
      setIsRegisterClicked(true);
      setIsLoginClicked(false);
      return;
    }

    const user = usersData.find((u) => u.email === loginData.email);
    if (!user) {
      alert("User not registered.");
      return;
    }

    if (user.password !== loginData.password) {
      alert("Incorrect password.");
      return;
    }

    if (user.email === "admin@gmail.com" && user.password === "admin") {
      setIsAdminLogged(true);
      setIsUserLogged(false);
      localStorage.setItem("role", "admin");
    } else {
      setIsUserLogged(true);
      setIsAdminLogged(false);
      localStorage.setItem("role", "user");
    }

    setIsLoginClicked(false);
  };

  const handleRegister = async (formData) => {
    if (formData === "login") {
      setIsLoginClicked(true);
      setIsRegisterClicked(false);
      return;
    }

    const existing = usersData.find((u) => u.email === formData.email);
    if (existing) {
      alert("User already exists.");
      return;
    }

    try {
      const result = await axios.post("http://localhost:8081/user", formData);
      if (
        (result.status === 200 || result.status === 201) &&
        result.data.email != "admin@gmail.com"
      ) {
        fetchUsers();
        setIsUserLogged(true);
        setIsLoginClicked(false);
        setIsRegisterClicked(false);
      } else {
        fetchUsers();
        setIsLoginClicked(false);
        setIsRegisterClicked(false);
        setIsUserLogged(false);
        setIsAdminLogged(false);
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };
  useEffect(() => {
    fetchUsers();
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setIsAdminLogged(true);
    } else if (role === "user") {
      setIsUserLogged(true);
    }
  }, []);

  function handleLogoutClick() {
    setIsUserLogged(false);
    setIsAdminLogged(false);
    setIsLoginClicked(false);
    setIsRegisterClicked(false);
    localStorage.removeItem("role");
    console.log("Logout successful");
  }

  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
        <PageHeader
          onLoginClick={handleLoginClick}
          onLogoutClick={handleLogoutClick}
          isAdminLogged={isAdminLogged}
          isUserLogged={isUserLogged}
        />
      </div>
      {isLoginClicked && <Login handleLogin={handleLogin} />}
      {isRegisterClicked && <Register handleRegister={handleRegister} />}
      {isUserLogged && <UserDashboard />}
      {isAdminLogged && <AdminDashboard />}
    </>
  );
};

export default Home;
