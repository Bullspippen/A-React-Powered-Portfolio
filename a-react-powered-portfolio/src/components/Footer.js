import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Me</h3>
            <p>Toronto, Ontario<br />Email: mohamed.osman111681@gmail.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <ul className="list-reset">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Social</h3>
            <ul className="list-reset">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mohamed Osman</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
