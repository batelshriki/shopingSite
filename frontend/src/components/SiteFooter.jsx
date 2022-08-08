import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../logo.jpg';
import { Link, useLocation } from 'react-router-dom';

const SiteFooter = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="">
      <footer className="text-white text-center footer mt-auto py-3 ">
        <Row className="footerRow" style={{ backgroundColor: 'black' }}>
          <Col sm>
            <h6 className="textStyle">
              {' '}
              Moana Shop
              <img className="logo" src={Logo} alt="logo" />
            </h6>
            <p>
              The shopping site that drives the world crazy, Sign up and you can
              enjoy coupons and benefits for newcomers only!
            </p>
            <div className="mb-3">
              Hurry! Sign up{' '}
              <Link to={`/signup?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
          </Col>
          <Col sm>
            <h6 className="textStyle ">PRODUCTS</h6>
            <p>MongoDB</p>
            <p>Node.js</p>
            <p>React</p>
            <p>Express</p>
          </Col>
          <Col sm>
            <h6 className="textStyle">CONTACT</h6>
            <p>
              <i className="fas fa-home mr-3"></i> Israel , Jerusalem
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> batel2610@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 972 054 6151 349
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </Col>
          <Col sm>
            <h6 className="text-uppercase mb-4 font-weight-bold textStyle ">
              Follow us
            </h6>
            <p>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#3b5998' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#55acee' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#dd4b39' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
            </p>
            <p>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#ac2bac' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#0082ca' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#333333' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>
          </Col>
        </Row>
        <Row style={{ backgroundColor: 'rgba(0, 0, 0, 0.8' }}>
          <Col sm> © 2022 Copyright: Batel shriki</Col>
        </Row>
      </footer>
    </Container>
  );
};
export default SiteFooter;
