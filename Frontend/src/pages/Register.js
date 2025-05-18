import { useState } from "react";
import Button from "react-bootstrap/Button";
import LoginSidebar from "../components/LoginSidebar";
import "../styles/register.css";

const Register = ({ handleRegister }) => {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    country: "",
    email: "",
    password: "",
    eNews: true,
  });
  const countries = [
    { id: "australia", value: "Australia" },
    { id: "canada", value: "Canada" },
    { id: "china", value: "China" },
    { id: "france", value: "France" },
    { id: "germany", value: "Germany" },
    { id: "india", value: "India" },
    { id: "italy", value: "Italy" },
    { id: "japan", value: "Japan" },
    { id: "mexico", value: "Mexico" },
    { id: "netherlands", value: "Netherlands" },
    { id: "russia", value: "Russia" },
    { id: "south-africa", value: "South Africa" },
    { id: "south-korea", value: "South Korea" },
    { id: "spain", value: "Spain" },
    { id: "sweden", value: "Sweden" },
    { id: "switzerland", value: "Switzerland" },
    { id: "turkey", value: "Turkey" },
    { id: "united-arab-emirates", value: "United Arab Emirates" },
    { id: "united-kingdom", value: "United Kingdom" },
    { id: "united-states", value: "United States" },
  ];

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formdata);
  };
  return (
    <div className="container">
      <div style={{ width: "60%" }}>
        <form className=" p-4 bg-white rounded" onSubmit={handleSubmit}>
          <div
            className="h1 mb-0 text-left"
            style={{ color: "#ef5994", fontWeight: "700" }}
          >
            Join the Fringe Family
          </div>
          <div className="mb-2 d-flex flex-column">
            <label className="fs-5 fw-bold mb-2">First name</label>
            <input
              className="input"
              id="firstname"
              type="text"
              value={formdata.firstname}
              placeholder="First name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2 d-flex flex-column">
            <label className="fs-5 fw-bold mb-2">Last name</label>
            <input
              className="input"
              id="lastname"
              type="text"
              value={formdata.lastname}
              placeholder="Last name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2 d-flex flex-column">
            <label className="fs-5 fw-bold mb-2" htmlFor="country">
              Country
            </label>
            <select
              className="input"
              id="country"
              value={formdata.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2 d-flex flex-column">
            <label className="fs-5 fw-bold mb-2">Email</label>
            <input
              className="input"
              id="email"
              type="email"
              value={formdata.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2 d-flex flex-column">
            <label className="fs-5 fw-bold mb-2">Password</label>
            <input
              className="input"
              id="password"
              type="password"
              value={formdata.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2 d-flex align-items-center">
            <input
              type="checkbox"
              id="eNews"
              className="me-2"
              checked={formdata.eNews}
              onChange={handleChange}
            />

            <label htmlFor="fringe-news" className="fs-5">
              I’d like to receive Fringe eNews!
            </label>
          </div>

          <Button
            variant="primary"
            className="fw-bold p-2.5"
            style={{ backgroundColor: "#77449B" }}
            type="submit"
          >
            Register
          </Button>

          <span className="horizontal-line"></span>
          <p className="fs-8 fw-bold">
            Already have an account?
            <a
              onClick={(e) => {
                e.preventDefault();
                handleRegister("login");
              }}
              style={{
                textDecoration: "underline",
                textDecorationColor: "#ef5994",
                cursor: "pointer",
              }}
            >
              Log in
            </a>
          </p>
        </form>
      </div>
      <LoginSidebar />
    </div>
  );
};
export default Register;
