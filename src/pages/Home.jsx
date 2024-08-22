
import Discover from "../components/Discover";
import FormSearch from "../components/FormSearch";
import ReviewSection from "../components/ReviewSection/ReviewSection";

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
              
                <ReviewSection></ReviewSection>
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
