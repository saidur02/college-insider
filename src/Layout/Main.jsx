import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;