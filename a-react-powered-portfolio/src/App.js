import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [pages] = useState([
    { name: 'About Me', component: <About /> },
    { name: 'Portfolio', component: <Portfolio /> },
    { name: 'Contact', component: <Contact /> },
    { name: 'Resume', component: <Resume /> },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
