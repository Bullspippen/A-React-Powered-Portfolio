import React, { useState } from 'react';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    { name: 'About Me', },
    { name: 'Portfolio', },
    { name: 'Contact', },
    { name: 'Resume', },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0].name);

  return (
    <div>
        <Navigation pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
