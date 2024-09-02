const ChildrenInput = ({ children, handleChildrenChange }) => (
    <div>
      <label>Children:</label>
      <input 
        type="number" 
        value={children} 
        onChange={handleChildrenChange} 
        min="0" 
      />
    </div>
  );
  
  export default ChildrenInput;