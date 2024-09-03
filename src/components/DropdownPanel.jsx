import React, { useState } from 'react';

const DropdownPanel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-panel">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default DropdownPanel;
