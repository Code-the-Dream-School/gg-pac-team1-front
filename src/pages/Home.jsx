import SearchForm from "../components/SearchForm";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Initializes useNavigate to handle navigation

  const handleSearch = (searchData) => {
    navigate('/search', { state: searchData });  // Redirect to the search page with the data
};

  return (
    <>
        <div>
            <section className="slider-section">
                <div className="home-container">
                <SearchForm onSearch={handleSearch} />
                </div>
            </section>

            <section className="auto-generated-section">
                <div className="container">
                <h2>Discover</h2>
                <p>Explore new and exciting destinations curated just for you.</p>
                </div>
            </section>

            <section className="auto-generated-section">
                <div className="container">
                <h2>Reviews</h2>
                <p>Read what other travelers have to say about their experiences.</p>
                </div>
            </section>

            <section className="auto-generated-section">
                <div className="container">
                <h2>Trips</h2>
                <p>Plan your next adventure with our tailored trip packages.</p>
                </div>
            </section>
        </div>
    </>
  );
}

export default Home;
