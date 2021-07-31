import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export const Footer = () => {
  return (
    <>
      <Container fluid className="fixed-bottom bg-dark p-3">
        <Col className="justify-content-center d-flex" md={{span: 10, offset: 1}} sm={{span:12}}>
          <Row className="w-100">
            <Col className={styles.contatos}>
              Contatos:
            </Col>
            <Col>
              <Link href="#"><a className={styles.mobile}><FontAwesomeIcon icon={faFacebook}/> 2toq</a></Link>
            </Col>
            <Col>
              <Link href="#"><a className={styles.mobile}><FontAwesomeIcon icon={faTwitter}/> @2toqofc</a></Link>
            </Col>
            <Col>
            <Link href="#"><a className={styles.mobile}><FontAwesomeIcon icon={faInstagram}/> @2toqinsta</a></Link>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  )
}
