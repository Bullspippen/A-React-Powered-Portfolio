import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';

function App() {
  const [pages] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <Container fluid className="bg-light vh-100">
    <div>
      <Container fluid className="justify-content-between d-flex bg-secondary col-12">
      <Row className="flex-row">
      <header className="banner">
        <h1>My Portfolio</h1> 
        <Navigation className="ml-auto"
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </header>
      </Row>
     </Container>
      <Container>
      <main>
        <Page currentPage={currentPage} />

      </main>
      </Container>
      <Footer />
    </div>
    </Container>
  );
}

export default App;

