import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../pages/Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;