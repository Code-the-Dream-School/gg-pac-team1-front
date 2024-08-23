import HotelSearchResultCard from './HotelSearchResultCard';

function ResultList({ results, hasSearched }) {
  if (!hasSearched) {
    return <p>Please perform a search to see the results.</p>;
  }

  if (results.length === 0) {
    return <p>No hotels were found for the search criteria.</p>;
  }

  return (
    <div className="result-list-container">
      {results.map(hotel => (
        <HotelSearchResultCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default ResultList;

