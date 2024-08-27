import React, { useState } from 'react';

const LeaveReview = () => {
  const [review, setReview] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the review submission
    console.log('Review submitted:', { username, password, review });
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
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              style={{ marginLeft: '10px', width: '100%', height: '100px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default LeaveReview;
