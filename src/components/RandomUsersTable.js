import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'


export const RandomUsersTable = ({ userData }) => {

    return (
        <Container fluid>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                  {userData?.sort((a, b) => a.name.last.localeCompare(b.name.last)).map((data) => (
                     <tr>
                          <td>{data.name.first} {data.name.last}</td>
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