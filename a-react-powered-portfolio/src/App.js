import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Project' },
    { name: 'Resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header className="banner">
        <h1>My Portfolio</h1>
      </header>
      <Navigation
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
