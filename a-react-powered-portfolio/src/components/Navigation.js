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
      <ul className="flex-row navlink">
        {pages.map((page) => (
          <li
            className={`mx-5 ${
              // If the current page is the same as the page being mapped over, add the navActive class to the list item
              currentPage.name === page.name && 'navActive'
            }`}
            key={page.name}
          >
            <a
              href={`#${page.name}`}
              style={{ color: 'black' }} // Set the color of the link to black
              onClick={() => setCurrentPage(page)}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
