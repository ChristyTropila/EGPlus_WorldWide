import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.scss';
import Container from 'react-bootstrap/Container';
import { PopupModal } from './PopupModal';

export const UsersTable = ({ userData }) => {
    const [openModal, setOpenModal] = useState(false);
    const [clickedUser, setClickedUser] = useState();

    const handleUserClicked = (userData) => {
        setClickedUser(userData);
        setOpenModal(!openModal);
    };

    const handleModalClose = () => {
        setOpenModal(!openModal);
        setClickedUser({})
    };

    return (
        <Container className="tableContainer">
            {openModal && (
                <PopupModal userData={clickedUser} closeModal={handleModalClose} />
            )}
            <Table responsive bordered size="md">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {userData?.sort((a, b) => a.name.last.localeCompare(b.name.last)).map((data, index) => (
                        <tr key={index} onClick={() => handleUserClicked(data)} >
                            <td className="align-middle">{data.name.first} {data.name.last}</td>
                            <td className="align-middle" >{new Date(data.dob.date).toDateString().slice(3)}</td>
                            <td className="align-middle" >{data.location.state}</td>
                            <td className="align-middle">{data.location.country}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}