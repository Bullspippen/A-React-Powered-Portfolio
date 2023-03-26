import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Page = ({ currentPage }) => {
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
  
  return (
    <section className="container mx-auto my-10 px-5">
      <h2 className="text-3xl font-bold mb-5">{currentPage.name}</h2>
      {renderPage(currentPage)}
    </section>
  );
};

export default Page;