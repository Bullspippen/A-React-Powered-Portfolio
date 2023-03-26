import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Page = ({ currentPage }) => {
  const renderPage = (currentPage) => {
    switch (currentPage) {
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
<<<<<<< HEAD
    <section className="container mx-auto my-10 px-5">
      <h2 className="text-3xl font-bold mb-5">{currentPage}</h2>
      {renderPage(currentPage)}
=======
    <section>
      <h2>{currentPage}</h2>
        {renderPage(currentPage)}
>>>>>>> parent of 01e9397 (page.js file updated that adds a border, padding, borderRadius, boxShadow, and marginBottom styles to create a bordered container for the content of each page)
    </section>
  )
}

<<<<<<< HEAD
export default Page;
=======
export default Page
>>>>>>> parent of 01e9397 (page.js file updated that adds a border, padding, borderRadius, boxShadow, and marginBottom styles to create a bordered container for the content of each page)
