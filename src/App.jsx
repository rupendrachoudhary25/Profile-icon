import React, { useState } from "react";
import "./App.css";
import { IoAddCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



function App() {
  const [showInputScreen, setShowInputScreen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [profileToDelete, setProfileToDelete] = useState(null);

  const handleCreateProfileClick = () => {
    setShowInputScreen(true);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      const newProfile = inputValue.charAt(0).toUpperCase();
      setProfiles([...profiles, newProfile]);
      setInputValue("");
      setShowInputScreen(false);
    }
  };

  const handleCancelClick = () => {
    setShowInputScreen(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteProfile = (index) => {
    setProfileToDelete(index);
  };

  const handleConfirmDelete = () => {
    if (profileToDelete !== null) {
      setProfiles(profiles.filter((_, i) => i !== profileToDelete));
      setProfileToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setProfileToDelete(null);
  };

  return (
    <div className="main">
      {!showInputScreen && profileToDelete === null && (
        <div className="firstScreen">
          {profiles.map((profile, index) => (
            <div key={index} className="profile">
              <span className="profileName">{profile}</span>
              <button
                className="deleteButton"
                onClick={() => handleDeleteProfile(index)}
              >
               <RxCross2 />

              </button>
            </div>
          ))}
          <button className="createProfile" onClick={handleCreateProfileClick}>
          <IoAddCircle />

          </button>
        </div>
      )}

      {showInputScreen && (
        <div className="inputScreen">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <button onClick={handleAddClick}>Add</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}

      {profileToDelete !== null && (
        <div className="deleteScreen">
          <p>Are you sure you want to delete this user?</p> <br />
          <button onClick={handleCancelDelete}>Cancel</button>
          <button
            id="deleteButton2"
            className="deleteButton2"
            onClick={handleConfirmDelete}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
