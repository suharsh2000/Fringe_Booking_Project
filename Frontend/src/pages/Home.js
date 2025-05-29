import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import PageHeader from "../components/PageHeader";
import Login from "../pages/Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";
import UserDetails from "../components/UserDetails";
import ShowsDashboard from "../components/ShowDashboard";
import Footer from "../components/Footer";


const Home = () => {
  // const navigate = useNavigate();
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [isProfileClick, setIsProfileClick] = useState(false);
  const [isAllShowsVisible, setIsAllShowsVisible] = useState(true)
  const[isGetInvolvedClicked,setIsGetInvolvedClicked]=useState(false)

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8081/user/getAllUsers");
      setUsersData(res.data);
    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };
  const handleLoginClick = (e) => {
    e.preventDefault()
    console.log("hii")
    setIsLoginClicked(true);
    setIsRegisterClicked(false);
    setIsUserLogged(false);
    setIsAdminLogged(false);
    setIsProfileClick(false);
  };

  const handleLogin = (loginData) => {
    if (loginData === "register") {
      setIsRegisterClicked(true);
      setIsLoginClicked(false);
      return;
    }

    const user = usersData.find((u) => u.email === loginData.email);
    localStorage.setItem("userDetails", JSON.stringify(user));

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
      const result = await axios.post(
        "http://localhost:8081/user/register",
        formData
      );
      if (
        (result.status === 200 || result.status === 201) &&
        result.data.email !== "admin@gmail.com"
      ) {
        localStorage.setItem("role", "user");
        localStorage.setItem("userDetails", JSON.stringify(result.data));
        console.log("user registered")
        fetchUsers();
        setIsUserLogged(true);
        setIsLoginClicked(false);
        setIsRegisterClicked(false);
      } else {
        fetchUsers();
        setIsLoginClicked(false);
        setIsRegisterClicked(false);
        // setIsUserLogged(false);
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

  function handleProfileClick() {
    console.log("my fring clicked");
    setIsProfileClick(!isProfileClick);
    setIsUserLogged(true);
    setIsLoginClicked(false);
    setIsRegisterClicked(false);
  }
  function handleSignOut() {
    setIsUserLogged(false);
    setIsAdminLogged(false);
    setIsLoginClicked(false);
    setIsRegisterClicked(false);
    setIsProfileClick(false)
    localStorage.clear();
    console.log("Logout successful");
  }
  function getInvolved(){
setIsGetInvolvedClicked(true)
setIsAllShowsVisible(false)
  }
  function getAllShows() {
    setIsAllShowsVisible(true)
    setIsGetInvolvedClicked(false)
    console.log("hi")
  }
  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
        <PageHeader
          onLoginClick={handleLoginClick}
          onProfileClick={handleProfileClick}
          isAdminLogged={isAdminLogged}
          isUserLogged={isUserLogged}
          getAllShows={getAllShows}
          getInvolved={getInvolved}
        />
      </div>
      {isLoginClicked && <Login handleLogin={handleLogin} />}
      {isRegisterClicked && <Register handleRegister={handleRegister} />}
      {isUserLogged && !isProfileClick && <UserDashboard isGetInvolvedClicked={isGetInvolvedClicked} isAllShowsVisible={isAllShowsVisible} />}
      {isAdminLogged && !isProfileClick && <AdminDashboard  isAllShowsVisible={isAllShowsVisible} isGetInvolvedClicked={isGetInvolvedClicked}/>}
      {isProfileClick && <UserDetails handleSignOut={handleSignOut} />}
      <Footer />
    </>
  );
};

export default Home;
