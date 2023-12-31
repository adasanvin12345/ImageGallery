import React, { useState, lazy, Suspense } from 'react';
import './App.css';


function App() {
  const [showGallery, setShowGallery] = useState(false);

  const handleClick = () => {
    // Dynamically import the ImageGallery component
    import('./ImageGallery.jsx').then((module) => {
      setShowGallery((prev) => (!prev));
    });
  };

  const ImageGallery = lazy(() => import('./ImageGallery.jsx'));
  return (
    <div className="App">
      <h1>Lazy Image Gallery</h1>
      {/* <button onClick={handleClick} className='custom-button'>Load Gallery</button>
      {showGallery && (
        <Suspense fallback={<div>Loading...</div>}>
          <ImageGallery />
        </Suspense>
      )} */}
    </div>
  );
}

export default App;
