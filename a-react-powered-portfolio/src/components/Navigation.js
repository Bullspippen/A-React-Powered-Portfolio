import React, { useEffect } from 'react';

// Destructure the props object into its properties and assign them to variables
const Navigation = ({ pages = [], setCurrentPage, currentPage }) => {
  // Use the useEffect() Hook to update the document title
  useEffect(() => {
    document.title = `${currentPage.name} | My Portfolio`;
  }, [currentPage]);

  return (
    <nav>
      {/* Map over the pages array and render a list item for each page */}
      <ul className="flex-row">
        {pages.map((page) => (
          <li
            className={`mx-5 ${
              // If the current page is the same as the page being mapped over, add the navActive class to the list item
              currentPage.name === page.name && 'navActive'
            }`}
            key={page.name}
          >
            <span
              // When the list item is clicked, update the current page
              onClick={() => setCurrentPage(page)}
            >
              {page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
