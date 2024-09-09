import React, { useState } from 'react';

function ChildrenSelector({ hasChildren, children, handleHasChildrenChange, handleChildrenChange }) {
  const [includeChildren, setIncludeChildren] = useState(false);

  const handleIncludeChildrenChange = (e) => {
    setIncludeChildren(e.target.checked);
    if (!e.target.checked) {
      handleHasChildrenChange({ target: { value: 'no' } });
    }
  };

  return (
    <div className="children-selector">
      <h3>Children and Extra Beds</h3>
      <label>
        <input
          type="checkbox"
          className="children-selector__checkbox"
          checked={includeChildren}
          onChange={handleIncludeChildrenChange}
        />
        Include children
      </label>

      {includeChildren && (
        <div className="children-selector__form-group">
          <label>Number of children:</label>
          <select
            value={children}
            onChange={handleChildrenChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default ChildrenSelector;