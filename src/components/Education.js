import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import csms from '../assets/img/csms.jpg'; // Path to CSMS logo
import sprcn from '../assets/img/sprcn.jpg'; // Path to SPRCN logo
import spcba from '../assets/img/spcba.jpg'; // Path to SPCBA logo
import pup from '../assets/img/pup.png'; // Path to PUP logo

export const Education = () => {
  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.timeline');
      const triggerBottom = window.innerHeight / 5 * 4;

      timeline.querySelectorAll('.timeline-item').forEach(item => {
        const boxTop = item.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col>
            <h2>Education</h2>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="content">
                  <h4>2008-2014</h4>
                  <p>
                    Elementary School<br />
                    Creative Star Montessori School
                  </p>
                </div>
                <img src={csms} alt="Creative Star Montessori School" className="logo" />
              </div>
              <div className="timeline-item right">
                <div className="content">
                  <h4>2014-2018</h4>
                  <p>
                    Junior High School<br />
                    San Pedro Relocation Center National High School
                  </p>
                </div>
                <img src={sprcn} alt="San Pedro Relocation Center National High School" className="logo" />
              </div>
              <div className="timeline-item left">
                <div className="content">
                  <h4>2018-2020</h4>
                  <p>
                    Senior High School<br />
                    San Pedro College of Business Administration
                  </p>
                </div>
                <img src={spcba} alt="San Pedro College of Business Administration" className="logo" />
              </div>
              <div className="timeline-item right">
                <div className="content">
                  <h4>2020-2024</h4>
                  <p>
                    College<br />
                    Polytechnic University of the Philippines
                  </p>
                </div>
                <img src={pup} alt="Polytechnic University of the Philippines" className="logo" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
