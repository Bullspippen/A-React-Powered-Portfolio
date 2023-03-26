import React from 'react'
// import PageContent from './PageContent'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

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
  
  return (
    <section>
      <h2>{currentPage}</h2>
        {renderPage(currentPage)}
    </section>
  )
}

export default Page
