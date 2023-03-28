import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-gray-900 text-center">
      <Container>
        <div className="">
          <div className="">
            <p className="">
              <strong>Toronto, Ontario</strong><br />
              <strong>Email:</strong> mohamed.osman111681@gmail.com
            </p>
          </div>
          <div className="">
            <div className="">
              <p><strong>&copy; {new Date().getFullYear()} Mohamed Osman</strong></p>
            </div>
            <div className="">
              <a
                href="https://www.linkedin.com/in/mohamedosman111681/"
                className=""
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Bullspippen"
                className=""
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
