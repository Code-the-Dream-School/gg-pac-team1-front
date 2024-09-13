import React, { useState, useEffect } from 'react';

function ChildrenSelector({ hasChildren, children, handleHasChildrenChange, handleChildrenChange, className }) {
  const [includeChildren, setIncludeChildren] = useState(hasChildren);

  useEffect(() => {
    setIncludeChildren(hasChildren);
  }, [hasChildren]);

  const handleIncludeChildrenChange = (e) => {
    const isChecked = e.target.checked;
    setIncludeChildren(isChecked);
    handleHasChildrenChange({ target: { value: isChecked ? 'yes' : 'no' } });
  };

  const handleChildrenSelectChange = (e) => {
    handleChildrenChange({ target: { value: Number(e.target.value) } });
  };

  return (
    <div className="children-selector">
      <h3 className={className}>Children and Extra Beds</h3>
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
            onChange={handleChildrenSelectChange}
          >
            <option value="0">0</option>
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