import React, {useEffect} from 'react'

// Destructure the props object into its properties and assign them to variables
const Navigation = (props) => {
    const {
        pages=[], 
        setCurrentPage,
        currentPage
    } = props;
    // Use the useEffect() Hook to update the document title
    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);
  return (
    <nav>
        {/* // Map over the pages array and render a list item for each page */}
      <ul className="flex-row">
        {pages.map((Page) => (
            <li
                className={`mx-5 ${
                    // If the current page is the same as the page being mapped over, add the navActive class to the list item
                    currentPage.name === Page.name && 'navActive'
                }`}
                key={Page.name}
            >
                <span
                    // When the list item is clicked, update the current page
                    onClick={() => setCurrentPage(Page.name)}
                >
                    {Page.name}
                </span>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
