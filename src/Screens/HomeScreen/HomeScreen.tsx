import React from 'react';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import ToDo from '../../components/ToDo/ToDo';

const HomeScreen = () => {
    return(
        <>
        <Header />
        <Nav />
        <ToDo />
        </>
    );
};

export default HomeScreen;
