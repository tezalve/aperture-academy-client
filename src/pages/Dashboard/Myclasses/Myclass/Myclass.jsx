import { faComment, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Myclass = ({ cls }) => {

    return (
        <div className='col-12'>
            <div className="card col-md-3 align-items-center">
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
                    <p className="card-title">Enrolled: {cls.enrolled}</p>
                </div>
                
                <div className="card-body text-center border-right border-dark">
                    <a className={ cls.status == "approved" || cls.status == "denied"? "btn disabled" : "btn"}><FontAwesomeIcon className='fs-2' icon={faComment} /></a>
                </div>
                
                <div className="card-body text-center border-right border-dark">
                    <Link to={`/dashboard/updateclass/${cls._id}`} className="btn"><FontAwesomeIcon className='fs-2' icon={faPenToSquare} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Myclass;