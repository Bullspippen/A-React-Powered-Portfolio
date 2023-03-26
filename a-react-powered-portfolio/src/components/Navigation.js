import React, {useEffect} from 'react'

const Navigation = (props) => {
    const {
        pages=[], 
        setCurrentPage,
        currentPage
    } = props;
    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);
  return (
    <nav>
      <ul className="flex-row">
        {pages.map((Page) => (
            <li
                className={`mx-5 ${
                    currentPage.name === Page.name && 'navActive'
                }`}
                key={Page.name}
            >
                <span
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
