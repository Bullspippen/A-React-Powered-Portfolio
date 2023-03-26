import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

// This component renders the current page and its content using the About, Portfolio, Contact, and Resume components
const Page = ({currentPage}) => {

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
  
  // Render the current page and its content using the renderPage function and the currentPage variable
  return (
    <section>
      <h2>{currentPage}</h2>
        {renderPage(currentPage)}
    </section>
  )
}

export default Page
