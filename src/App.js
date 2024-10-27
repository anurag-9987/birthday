import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Happy Birthday Wishes!</h1>
      {submitted ? (
        <div>
          <h2>Happy Birthday, {name}!</h2>
          <p>Your wish: "{wish}" has been sent!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Friend's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <textarea
            placeholder="Type your birthday wish here..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            required
          />
          <br />
          <button type="submit">Send Birthday Wish</button>
        </form>
      )}
    </div>
  );
};

export default App;
