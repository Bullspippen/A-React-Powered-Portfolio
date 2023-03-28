import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

// This component renders the current page based on the current page name in state (App.js)
const Page = ({ currentPage }) => {
  // currentPage is an object with a name and description property that is passed down from App.js
  const renderPage = (currentPage) => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  
  // Render the current page based on the name property of the currentPage object
  return (
    <section className="container mx-auto my-10 px-5">
      {renderPage(currentPage)}
    </section>
  );
};

export default Page;