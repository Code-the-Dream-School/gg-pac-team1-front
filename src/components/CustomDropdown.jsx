import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function CustomDropdown({ userName, userEmail, goToAccount, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="custom-dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <FontAwesomeIcon icon={faUser} size="lg" />
        <span style={{ marginLeft: "8px" }}>
          Hi, <strong>{userName}</strong>
        </span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <li>
          <button onClick={goToAccount} className="dropdown-item">
            <FontAwesomeIcon icon={faCog} size="xl" />
            <span>Setting</span>
          </button>
        </li>
        <li>
          <button onClick={handleLogout} className="dropdown-item">
            <FontAwesomeIcon icon={faSignOutAlt} size="xl" />
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CustomDropdown;
