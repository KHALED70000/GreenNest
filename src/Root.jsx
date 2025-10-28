import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './FIXEDpart/Nav';
import Footer from './FIXEDpart/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;