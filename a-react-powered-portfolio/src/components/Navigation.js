import React from 'react';

function Navigation(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

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
