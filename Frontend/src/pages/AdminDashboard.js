import { useEffect, useState } from "react";
import '../styles/adminDashboard.css';
import AddShowForm from "../components/AddShow";
import ShowsDashboard from "../components/ShowDashboard";

const AdminDashboard = ({ isAllShowsVisible, isGetInvolvedClicked }) => {
  const [isAddShowClicked, setIsAddShowClicked] = useState(false);


  const handleAddShow = (e) => {
    e.preventDefault();
    setIsAddShowClicked(true);
  };

  const showAdded = () => {
    setIsAddShowClicked(false);
  };
useEffect(()=>{
  console.log(isGetInvolvedClicked)
})
  return (
    <div className="container">
      {isGetInvolvedClicked && <ShowsDashboard isAddShowClicked={isAddShowClicked} isGetInvolvedClicked={isGetInvolvedClicked}/>}
      {!isGetInvolvedClicked && <ShowsDashboard isAddShowClicked={isAddShowClicked} isGetInvolvedClicked={isGetInvolvedClicked}/>}
    </div>
  );
};

export default AdminDashboard;
{/* {!isAllShowsVisible ? (<div className="container1">
        <h2 className="dashboard-heading">Add Show</h2>
        {!isAddShowClicked ? (
          <button
            className="addShowButton"
            onMouseOver={(e) => (e.target.style.backgroundColor = "#663388")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#77449B")}
            onClick={handleAddShow}
          >
            Add Show
          </button>
        ) : (
          <AddShowForm showAdded={showAdded} />
        )}
      </div>) : (<ShowsDashboard isAddShowClicked={isAddShowClicked}/>)} */}