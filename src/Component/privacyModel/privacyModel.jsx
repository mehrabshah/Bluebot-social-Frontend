import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './privacyModel.css'
import { Link } from 'react-router-dom';
function PrivacyPolicyModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleAccept = () => {
    setShow(false);
    localStorage.setItem('privacyPolicyAgree', 'true');
}
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        By selecting "Accept," you hereby acknowledge your agreement to Blue Bot Social Privacy Policy and consent form.
        </Modal.Body>
        <Modal.Footer>
            <Link to="/privacyPolicy">
          <button className='custom-buttonn'>
            Read More
          </button>
            </Link>
          <Button onClick={handleAccept}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PrivacyPolicyModal;
