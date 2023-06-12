import { faComment, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useallClasses from '../../../../hooks/useallClasses';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Mclass = ({ cls }) => {

    const [, refetch] = useallClasses();

    const fetchUser = (status) => {
        fetch(`http://localhost:5000/updateclassstatus/${cls._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        refetch();
        refetch();
        toast.success(`Successfully changed status of class: "${cls.class_name}"`);
    }

    const handleApprove = () => {
        const status = "approved";
        fetchUser(status);
    }

    const handleDeny = () => {
        const status = "denied";
        fetchUser(status);
    }

    return (
        <div className='col-3 p-2'>
            <div className="card align-items-center">
                <img src={cls.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">Class: {cls.class_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Instructor name: {cls.instructor_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Available Seats: {cls.available_seats}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Price: ${cls.price}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Status: {cls.status}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={cls.status == "pending" || cls.status == "" ? "btn" : "btn disabled"} onClick={handleApprove}><FontAwesomeIcon className='fs-2 text-success' icon={faThumbsUp} /></a>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={cls.status == "pending" || cls.status == "" ? "btn" : "btn disabled"} onClick={handleDeny}><FontAwesomeIcon className='fs-2 text-danger' icon={faThumbsDown} /></a>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <Link to={`/dashboard/updatefeedback/${cls._id}`} className={cls.status == "denied" ? "btn" : "btn disabled"} ><FontAwesomeIcon className='fs-2 text-warning' icon={faComment} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Mclass;