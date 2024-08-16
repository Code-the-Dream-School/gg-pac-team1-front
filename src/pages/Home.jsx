
import Discover from "../components/Discover";
import FormSearch from "../components/FormSearch";

function Home() {
  return (
    <>
        <div>
            <section className="slider-section">
                <FormSearch />
            </section>

            <section className="auto-generated-section">
                <div className="container">
                <h2>Discover</h2>
                <p>Explore new and exciting destinations curated just for you.</p>
                <Discover></Discover>
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
