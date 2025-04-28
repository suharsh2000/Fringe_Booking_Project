import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../styles/login.css";
import LoginSidebar from "../components/LoginSidebar";

const Login = ({ handleLogin }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="container">
      <div style={{ width: "60%" }}>
        <Form className=" p-4 bg-white rounded" onSubmit={handleSubmit}>
          <div
            className="h1 mb-10 text-left"
            style={{ color: "#ef5994", fontWeight: "700" }}
          >
            Log In
          </div>
          {show ? (
            <Alert
              className="mb-2"
              variant="danger"
              onClose={() => setShow(false)}
              dismissible
            >
              Incorrect username or password.
            </Alert>
          ) : (
            <div />
          )}
          <Form.Group className="mb-2" controlId="email">
            <Form.Label className="fs-5 fw-bold">Email</Form.Label>
            <Form.Control
              type="text"
              value={loginData.email}
              placeholder="Email"
              onChange={handleChange}
              className="border-color"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label className="fs-5 fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              value={loginData.password}
              placeholder="Password"
              onChange={handleChange}
              className="border-color"
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            className="fw-bold p-2.5"
            style={{ backgroundColor: "#77449B" }}
            type="submit"
          >
            Log In
          </Button>
        </Form>
        <div className="d-flex flex-column p-4">
          <a
            id="register"
            onClick={() => handleLogin("register")}
            className="custom-link"
          >
            Don't have an account yet?
          </a>
          <a href="/" className="custom-link">
            Forgotten your password?
          </a>
        </div>
      </div>
      <LoginSidebar />
    </div>
  );
};

export default Login;
