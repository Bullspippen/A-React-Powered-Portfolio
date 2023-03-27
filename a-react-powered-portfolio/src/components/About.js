import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
            <p>Hi there! My name is [Mohamed Osman], and I'm a web developer with [X years] of experience in building beautiful and functional websites and applications. I'm passionate about coding and enjoy learning about new technologies and techniques to improve my skills. </p>
            <p>In my free time, I enjoy [personal interest/hobby] and [personal interest/hobby]. </p>
            <p>Feel free to contact me to learn more about my work or to collaborate on a project!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;