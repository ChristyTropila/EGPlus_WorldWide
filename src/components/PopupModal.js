import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const PopupModal = ({ userData, closeModal }) => {
    console.log(userData)
    return (
        <>

            <Modal show={true} onHide={closeModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modalHeader">{userData.name.first} {userData.name.last} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalBodyContainer">
                        <img src={userData.picture.large} alt="User" />
                        <div className="contactInfoContainer">
                            <h5>
                                Contact Information
                            </h5>          
                            <ul>
                                <li><b>Email: </b>{userData.email}</li>
                                <li><b>Cell: </b>{userData.cell}</li>
                            </ul>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="modalButton" variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}