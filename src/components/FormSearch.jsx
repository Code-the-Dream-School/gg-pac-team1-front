const FormSearch = () => {
  return (
    <>
        <div className="form-container">
                <form className="travel-form">
                    <div className="form-group">
                        <label for="destination">
                            <i className="fas fa-map-marker-alt icon"></i> 
                        </label>
                        <input
                            type="text"
                            id="destination"
                            placeholder="Going to"
                            aria-label="Destination"
                        />
                    </div>
                    <div className="form-group">
                        <label for="date">
                            <i className="fas fa-calendar-alt icon"></i> 
                        </label>
                        <input type="date" id="date" aria-label="Fecha" />
                    </div>
                    <div className="form-group">
                        <label for="travelers">
                            <i className="fas fa-users icon"></i> 
                        </label>
                        <input
                            type="number"
                            id="travelers"
                            placeholder="Number of travelers"
                            aria-label="Number of travelers"
                            min="0" 
                        />
                    </div>
                    <div className="form-group">

                        <div className="transport-options">
                            <label>
                                <input type="radio" name="transportation" value="plane" />
                                <i className="fas fa-plane icon"></i> 
                            </label>
                
                            <label>
                                <input type="radio" name="transportation" value="car" />
                                <i className="fas fa-car icon"></i> 
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled><i className="fas fa-paper-plane"></i></button>
                </form>
            </div> 
    </>
  )
}

export default FormSearch