import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';

// This component renders the entire app and its content using the Navigation, Page, and Footer components
function App() {
    // Create a state variable for the pages array and assign it an initial value of an array of objects
  const [pages] = useState([
    { name: 'About Me', },
    { name: 'Portfolio', },
    { name: 'Contact', },
    { name: 'Resume', },
  ]);

  // Create a state variable for the current page and assign it an initial value of the first page in the pages array
  const [currentPage, setCurrentPage] = useState(pages[0].name);

  return (
    <div>
      {/* // Render the Navigation component and pass it the pages array, the setCurrentPage function, and the currentPage variable */}
        <Navigation pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>
        {/* // Render the Page component and pass it the currentPage variable */}
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
