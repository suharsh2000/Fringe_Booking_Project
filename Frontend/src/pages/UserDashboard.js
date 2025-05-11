import React from "react";
import ShowsDashboard from "../components/ShowDashboard";
import AddShowForm from "../components/AddShow";
import '../styles/userDashboard.css'


const UserDashboard = ({ isGetInvolvedClicked, isAllShowsVisible, isAddShowClicked, showAdded, }) => {


  return (<div className="container">
    {isGetInvolvedClicked && !isAllShowsVisible && (
      <AddShowForm />)}{isAllShowsVisible && (
        <ShowsDashboard isAddShowClicked={isAddShowClicked} />)}
  </div>
  );
};

export default UserDashboard;
