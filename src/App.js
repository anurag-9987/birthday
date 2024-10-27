import React, { useState } from 'react';
import './App.css';

// Function to import all images from the specified folder
const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('./mypics', false, /\.(png|jpe?g|svg)$/));

const App = () => {
  const [name, setName] = useState('Srishti');
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <h1>Happy Birthday, {name}!</h1>
      <div className="flipbook">
        <div className="flipbook-page">
          <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} />
        </div>
      </div>
      <div className="navigation">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
