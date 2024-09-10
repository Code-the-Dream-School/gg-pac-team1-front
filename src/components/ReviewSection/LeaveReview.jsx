import React, { useState } from 'react';

const LeaveReview = ({ addReview }) => {
  const [review, setReview] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      author: username,
      text: review,
      rating: rating,
      hotel: 'Hotel Sunshine' // This should match the selected hotel from the parent component
    };
    addReview(newReview);
    setUsername('');
    setReview('');
    setRating(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Your Review:
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              style={{
                marginLeft: '10px',
                width: '100%',
                height: '100px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '10px',
                fontSize: '16px',
                boxSizing: 'border-box',
                position: 'relative',
              }}
              className="blinking-cursor"
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Rating:
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit Review
        </button>
      </form>
      <style jsx>{`
        .blinking-cursor::after {
          content: '|';
          position: absolute;
          right: 10px;
          bottom: 10px;
          color: black;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LeaveReview;
