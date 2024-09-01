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
        <>
          <div className="children-selector__form-group">
            <label>Are there children?</label>
            <div className="children-selector__radio-group">
              <div>
                <input
                  type="radio"
                  name="hasChildren"
                  value="yes"
                  onChange={handleHasChildrenChange}
                />
                <label>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="hasChildren"
                  value="no"
                  onChange={handleHasChildrenChange}
                />
                <label>No</label>
              </div>
            </div>
          </div>

          {hasChildren && (
            <div className="children-selector__count">
              <label>Number of children:</label>
              <input
                type="number"
                value={children}
                onChange={handleChildrenChange}
                min="0"
                max="8"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ChildrenSelector;
