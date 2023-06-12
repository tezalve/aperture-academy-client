import { faHammer, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUsers from '../../../hooks/useUsers';

const User = ({ user }) => {
    const [, refetch] = useUsers();
    const fetchUser = (role) => {
        fetch(`https://aperture-academy-server.vercel.app/updateuser/${user.email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            refetch();
            refetch();
        toast.success(`Successfully changed role of User: "${user.displayName}"`);
    }
    const handleInstructor = () => {
        const role = "instructor";
        fetchUser(role);
    }

    const handleAdmin = () => {
        const role = "admin";
        fetchUser(role);
    }

    return (
        <div className='col-md-12 py-1'>
            <div className="card flex-row align-items-center">
                <img src={user.photoURL} width={"100px"} height={"100px"} className="" alt="..." />
                <div className="card-body">
                    <p className="card-title text-center">Name: {user.displayName}</p>
                </div>
                <div className="card-body">
                    <p className="card-title text-center">Email: {user.email}</p>
                </div>
                <div className="card-body">
                    <p className="card-title text-center">Role: {user.role}</p>
                </div>
                <div>
                    <Link className={user.role == "student" ? "btn fa-3x text-warning" : "btn fa-3x text-muted disabled"} onClick={handleAdmin}><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon></Link>
                </div>
                <div className='px-1'>
                    <Link className={user.role == "student" ? "btn fa-3x text-warning" : "btn fa-3x text-muted disabled"} onClick={handleInstructor}><FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default User;