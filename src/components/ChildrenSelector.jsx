import React from 'react';

function ChildrenSelector({ hasChildren, children, handleHasChildrenChange, handleChildrenChange }) {
  return (
    <>
      <div className="form-group">
        <label>Are there children?</label>
        <div className="radio-group">
          <div>
            <input 
              type="radio" 
              name="hasChildren" 
              value="yes"
              onChange={handleHasChildrenChange} 
            />
            <label>Sí</label>
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
        <div className="form-group">
          <label>Children</label>
          <input 
            type="number" 
            value={children}
            onChange={handleChildrenChange} 
            min="0" 
          />
        </div>
      )}
    </>
  );
}

export default ChildrenSelector;
