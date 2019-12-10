import React from 'react';
import Container from 'react-bootstrap/Container';
<<<<<<< HEAD
import ListGroup from 'react-bootstrap/ListGroup';
import logo from '../images/logosvg.svg';
=======
//import logo from '../images/logosvg.svg';
>>>>>>> 2bc6ca9f46885a9c9fce587e8b638068e0d1ded5
import fullLogo from '../images/logo_white.png';

const About = () => {
  const imgStyle = {
    width: '100%',
    maxWidth: '1005px',
    height: 'auto',
    padding: '0px 0px 50px 0px'
  };

  const centered = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <Container className='text-center'>
      <div style={centered}>
        <img
          style={imgStyle}
          src={fullLogo}
          alt='Me-VS-World'
          padding='100px 0px 0px 0px'
        />
        <h5 style={{ color: 'white' }}>
          University of Jyväskylä, Open Data Student Project, Fall 2019,
          (TIEA207)
        </h5>
        <h5 style={{ color: 'white' }}>Authors:</h5>

        <ListGroup variant='flush'>
          <ListGroup.Item className='authorlist'>Lassi Mustonen</ListGroup.Item>
          <ListGroup.Item className='authorlist'>Ella Mäkelä </ListGroup.Item>
          <ListGroup.Item className='authorlist'>Joni Pitkänen</ListGroup.Item>
          <ListGroup.Item className='authorlist'>Lasse Kukkonen</ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  );
};

export default About;
