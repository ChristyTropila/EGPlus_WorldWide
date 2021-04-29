import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import '../App.scss';
import Container from 'react-bootstrap/Container'


export const UsersTable = ({ userData }) => {
    const [openModal, setOpenModal] = useState(false);
    const [clickedUser, setClickedUser] = useState();


    const handleUserClicked = (userData) => {
        setClickedUser(userData);
        setOpenModal(!openModal);
    };

    console.log(clickedUser)

    return (
        <Container className="tableContainer">
            <Table responsive striped bordered size="md">
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
                     <tr >
                          <td onClick={() => handleUserClicked(data)}>{data.name.first} {data.name.last}</td>
                          <td>{new Date(data.dob.date).toDateString().slice(3)}</td>
                          <td>{data.location.state}</td>
                          <td>{data.location.country}</td>
                      </tr>
                  ))}  
                </tbody>
            </Table>
        </Container>
    )
}