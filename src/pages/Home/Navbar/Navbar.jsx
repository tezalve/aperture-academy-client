import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Button, Image } from 'react-bootstrap';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => [])
            .then(error => console.error(error));
    }

    const [mode, setMode] = useState('dark');
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-md navbar-light justify-content-center">
                <ul className="navbar-nav align-items-center d-flex justify-content-around ">
                    <li className="nav-item active p-1">
                        <Image style={{ width: "40px", height: "40px" }} src="" roundedCircle></Image>
                    </li>
                    <li className="nav-item active p-1">
                        <Link id='home' className='text-decoration-none' style={{ color: 'black' }}>
                            Aperture Academy
                        </Link>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' to={"/"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' to={"/instructors"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                            Instructors
                        </NavLink>
                    </li>
                    <li className="nav-item p-1">
                        <NavLink id='blog' className='text-decoration-none' to={"/classes"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                            Classes
                        </NavLink>
                    </li>
                    {
                        user ?
                            <li className="nav-item active p-1">
                                {/* had to encode the email string so the route works, decoded in server */}
                                <NavLink id='home' className='text-decoration-none' to={`/dashboard`} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                    Dashboard
                                </NavLink>

                            </li>
                            : ""
                    }
                    <li className="nav-item p-1">
                        {
                            user ?
                                <>
                                    <span className='p-1'>
                                        <Image title={user.displayName} className='' style={{ width: "40px", height: "40px" }} src={user.photoURL} roundedCircle></Image>
                                    </span>
                                    <Button className='btn-danger' onClick={handleLogOut}>
                                        Signout
                                    </Button>
                                </>
                                :
                                <>
                                    <NavLink id='login' className='text-decoration-none' to={"/login"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                        Login
                                    </NavLink>
                                </>
                        }
                    </li>
                    <li>
                        <DarkModeToggle
                            mode={mode}
                            dark="Dark"
                            light="Light"
                            size="sm"
                            inactiveTrackColor="#e2e8f0"
                            inactiveTrackColorOnHover="#f8fafc"
                            inactiveTrackColorOnActive="#cbd5e1"
                            activeTrackColor="#334155"
                            activeTrackColorOnHover="#1e293b"
                            activeTrackColorOnActive="#0f172a"
                            inactiveThumbColor="#1e293b"
                            activeThumbColor="#e2e8f0"
                            onChange={(mode) => {
                                setMode(mode);
                            }}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;