import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import profilePic from '../assets/profile-pic.jpg';

const About = () => {
  return (
    <section className="my-4">
      <Container>
        <Row>
          {/* <Col md={4}> */}
          {/* <Image src={profilePic} alt="Profile Picture" roundedCircle fluid /> */}
          {/* </Col> */}
          <Col md={12}>
            <h2>About Me</h2>
            <p>
              As a Full Stack Developer, I am driven by a deep passion for
              technology and the boundless potential of the human mind. My
              expertise in the entire development process, from front-end to
              back-end, is backed by a profound understanding of software
              architecture and design principles, and I am constantly seeking
              to expand my knowledge and skills. My ability to write clean,
              efficient code and to adapt quickly to new technologies has
              allowed me to build robust, user-friendly applications that meet
              the needs of clients and users alike.
            </p>
            <p>
              While I am driven to achieve success as a Full Stack Developer, I
              am equally inspired by the journey of self-discovery and
              intellectual exploration. I find solace in introspection and
              self-reflection, and I am constantly striving to deepen my
              understanding of the world and myself. As the philosopher Ralph
              Waldo Emerson once said, "
              <strong>
                <em>Life is a journey, not a destination,</em>
              </strong>
              " and I believe that it is the process of thinking deeply and
              overcoming challenges that truly defines us.
            </p>
            <p>
              Having worked extensively as a Full Stack Developer, I have
              developed a comprehensive understanding of the fundamental
              principles that govern software architecture and design. I am
              committed to innovation and excellence, and I approach every
              challenge with creativity, determination, and a deep desire to
              achieve the best possible outcome. In the words of renowned
              computer scientist Alan Kay, "
              <strong>
                <em>The best way to predict the future is to invent it,</em>
              </strong>
              " and as a Full Stack Developer, I am proud to be part of a
              community of innovators who are shaping the future of technology
              and changing the way we live, work, and connect with one another.
            </p>
            <p>
              As an individual, I must acknowledge and express my admiration for
              my own remarkable tenacity and unwavering perseverance in the
              midst of difficult circumstances. The vicissitudes of life may
              prove daunting and unforeseeable, yet I have consistently
              demonstrated an admirable level of fortitude and steadfastness.
              The ability to persevere through challenges and find solutions is
              a hallmark of success, as noted by the esteemed psychologist
              Albert Bandura, who stated, "
              <strong>
                <em>
                  Self-belief does not necessarily ensure success, but
                  self-disbelief assuredly spawns failure.
                </em>
              </strong>
              "
            </p>
            <p>
              In all aspects of my life, whether personal or professional, I
              remain dedicated to the pursuit of excellence, innovation, and
              self-discovery. As a Full Stack Developer, I am proud to be part
              of a community of trailblazers and innovators who are shaping the
              future of technology and transforming the world around us. The
              words of Alan Kay, who once said, "
              <strong>
                <em>The best way to predict the future is to invent it,</em>
              </strong>
              " inspire me to continue pushing the boundaries of what is
              possible, and to embrace the journey of intellectual discovery
              that lies before us all.
            </p>
            <p>
              My love for intellectual discovery and the power of the human mind
              aligns with the words of Aristotle, the renowned philosopher, who
              once said, "
              <strong>
                <em>
                  Whosoever is delighted in solitude is either a wild beast or a
                  god.
                </em>
              </strong>
              " I am reminded of the great scholar and mathematician Archimedes,
              who shouted, "
              <strong>
                <em>Eureka! I have found it!</em>
              </strong>
              " after discovering a solution to a challenging problem while
              bathing in solitude.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
