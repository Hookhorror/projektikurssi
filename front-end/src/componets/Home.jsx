import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom/';
import crowd from '../images/testikuva.png';
import logo from '../images/logo_white.png';

const Home = () => {
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

  const buttonStyle = {
    display: 'inline-block',
    color: 'white',
    background: 'rgba(255, 255, 255, 0)',
    border: '2px solid #fff',
    fontWeight: 'bold',
    borderRadius: '0px',
    textAlign: 'center',
    outline: 'none',
    textDecoration: 'none',
    margin: '4px'
  };

  return (
    <>
      <style type="text/css">
        {`
         .bg {
          height: 100vh;
          background-position: bottom center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-color: #00000;
        }
      `}
      </style>
      <div className="text-center bg" style={{ backgroundImage: `url(${backg})` }}>
        <Col>
          <div style={centered}>
            <img style={imgStyle} src={logo} alt="Me-VS-World" padding="100px 0px 0px 0px" />
            <h3 style={{ fontWeight: '700', color: 'white' }}>
              Click to compare your self to the worlds data on finance, education and other
              subjects!
            </h3>
            <div className="pl-5">
              <Link to="/salary">
                <Button className="m-4" style={buttonStyle}>
                  Salary
                </Button>
              </Link>
              <Link to="/education">
                <Button className="m-4" style={buttonStyle}>
                  Education
                </Button>
              </Link>
              <Button className="m-4" style={buttonStyle}>
                Other
              </Button>
            </div>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Home;