import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import {RandomUsersTable} from './RandomUsersTable';


export const Layout = () => {
    const [randomUserData, setRandomUserData] = useState();

    useEffect(() => {
        const api = 'https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo';
        fetch(api)
            .then(res => res.json())
            .then(userData => {
                setRandomUserData(userData.results)
            }).catch((err) => {
                console.log( `Error: ${err}` );
            })
    }, []);

    console.log(randomUserData)

    return (
        <>
                <header>
                    <Header />
                </header>
                <section>
                    <RandomUsersTable userData={randomUserData} />
                </section>
       </>
    )
}