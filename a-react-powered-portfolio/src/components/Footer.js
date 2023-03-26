import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Column 1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact Me
          </div>
          <p className="my-3 block text-gray-300 text-base leading-6">
            Toronto, Ontario<br />Email: mohamed.osman111681@gmail.com
          </p>
        </div>

        {/* Column 2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Links
          </div>
          <ul className="my-3">
            <li>
              <a
                href="  "
                className="text-gray-300 hover:text-gray-100 text-base leading-6"
              >
                Link 1
              </a>
            </li>
            <li>
              <a
                href="  "
                className="text-gray-300 hover:text-gray-100 text-base leading-6"
              >
                Link 2
              </a>
            </li>
            <li>
              <a
                href="  "
                className="text-gray-300 hover:text-gray-100 text-base leading-6"
              >
                Link 3
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social
          </div>
          <ul className="my-3">
            <li>
              <a
                href="https://www.linkedin.com/in/mohamedosman111681/"
                className="flex items-center text-gray-300 hover:text-gray-100 text-base leading-6"
              >
                <span className="mr-2">
                  <FaLinkedin />
                </span>{" "}
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mohamed-osman"
                className="flex items-center text-gray-300 hover:text-gray-100 text-base leading-6"
                >
                <span className="mr-2">
                <FaGithub />
                </span>{" "}
                Github
                </a>
                </li>
                </ul>
                </div>

        {/* Column 4 */}
       <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          About me
        </div>
        <p className="my-3 block text-gray-300 text-base leading-6">
        Hi there! I am a web developer based in Toronto, Ontario. I enjoy building responsive, accessible and visually stunning websites. Let's work together!
        </p>
      </div>
    </div>

      {/* Bottom bar */}
    <div className="bg-gray-900">
      <div className="flex justify-between items-center py-3 px-10">
        <div className="text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohamed Osman</p>
      </div>
      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/mohamedosman111681/"
          className="text-gray-400 hover:text-gray-300 mr-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mohamed-osman"
          className="text-gray-400 hover:text-gray-300"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </div>
</footer>
);
};

export default Footer;
