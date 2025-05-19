import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = ({handleSignOut}) => {
  const [isUpdateClick, setIsUpdateClick] = useState(false);
  const [userDetails, setUserDetails] = useState({
    title: "",
    dob: "",
    gender: "",
    mobile: "",
    firstname: "",
    lastname: "",
    country: "",
    email: "",
    password: "",
    eNews: true,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (user) {
      setUserDetails({
        title: user.title || "",
        dob: user.dob || "",
        gender: user.gender || "",
        mobile: user.mobile || "",
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        country: user.country || "",
        email: user.email || "",
        password: user.password || "",
        eNews: true,
      });
    }
  }, []);
  const handleChange = (e) => {
    const { id, value, name } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const result = await axios.put(
      "https://fringe-booking-project.vercel.app/user/UpdateUser",
      userDetails
    );
    if (result.status == 200) {
      console.log("Update successful");
      setIsUpdateClick(false);
    }
  };

  return (
    <>
      {!isUpdateClick && (
        <div>
          <div className="bg-dark text-white py-3">
            <h1 className="text-center">Account Settings</h1>
          </div>

          <div className="container my-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <div className="card shadow p-4" style={{ width: "100%" }}>
              <div>
                <h3>{userDetails.firstname + " " + userDetails.lastname}</h3>
                <p className="text-muted">{userDetails.email}</p>
                <a
                  href="#"
                  onClick={() => setIsUpdateClick(true)}
                  style={{
                    cursor: "pointer",
                    textAlign: "left",
                    textDecoration: "underline",
                    textDecorationColor: "#ef5994",
                    fontSize: "20px",
                  }}
                >
                  Update details & Password
                </a>
              </div>
            </div>
            <div style={{ margin: '10px' }}>
              <input type="button" value="Sign Out" onClick={handleSignOut} style={{ backgroundColor: 'skyblue', borderRadius: '10px', padding: '10px', borderColor: 'white' }} />
            </div>
          </div>
        </div>
      )}
      {isUpdateClick && (
        <>
          <div className="bg-dark text-white py-3">
            <h1 className="text-center">My Details</h1>
          </div>
          <div className="container my-5">
            <form className="card p-4 shadow">
              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Title (optional)</label>
                <select
                  className="form-select"
                  id="title"
                  value={userDetails.title || ""}
                  onChange={handleChange}
                >
                  <option>Ms</option>
                  <option>Mr</option>
                  <option>Dr</option>
                  <option>Prof</option>
                  <option>Other</option>
                </select>
              </div>

              {/* First Name */}
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  value={userDetails.firstname}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  value={userDetails.lastname}
                  onChange={handleChange}
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label className="form-label">Date of Birth (optional)</label>
                <p className="small text-muted">
                  This information is used to help Adelaide Fringe better
                  understand our audiences. We do not share this information
                  with anyone.
                </p>
                <div className="row">
                  <div className="col">
                    <input
                      type="date"
                      id="dob"
                      className="form-control"
                      value={userDetails.dob}
                      onChange={(e) => {
                        setUserDetails((prev) => ({
                          ...prev,
                          dob: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label">Gender (optional)</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={userDetails.gender === "male"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={userDetails.gender === "female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="nonbinary"
                    checked={userDetails.gender === "nonbinary"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="nonbinary">
                    Non-binary
                  </label>
                </div>
              </div>

              {/* Contact Number */}
              <div className="mb-3">
                <label className="form-label">
                  Best Contact Number (mobile preferable)
                </label>
                <p className="small text-muted">
                  We need your mobile number to text you of any last minute
                  cancellations. If we can’t text you regarding a cancellation,
                  we will send you an email. We will not use your number for any
                  other purposes.
                </p>
                <input
                  type="tel"
                  id="mobile"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={userDetails.mobile}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <p className="small text-muted">
                  Changing this will change the email you log in with
                </p>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </div>

              {/* New Password */}
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <p className="small text-muted">
                  Leave this blank unless you want to change your password - 8
                  character minimum
                </p>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="New password"
                  value={userDetails.password}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update My Details
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default UserDetails;
