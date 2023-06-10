import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Class2.css'

const Class2 = ({ cls }) => {

    const handleSelect = () =>{
        console.log("select");
    }

    return (
        <div className='col-md-12 p-5'>
            <div className={cls.available_seats<=0? "card flex-row align-items-center bg-danger" : "card flex-row align-items-center"}>
                <img src={cls.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <h6 className="card-title">Class: {cls.name}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Instructor name: {cls.instructor}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Available Seats: {cls.available_seats}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center border-right border-dark">
                    <h6 className="card-title">Price: ${cls.price}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center border-right border-dark">
                    <a className={cls.available_seats<=0? "btn disabled" : "btn"} onClick={handleSelect}><FontAwesomeIcon className='plus' icon={faCirclePlus} /></a>
                </div>
            </div>
        </div>
    );
};

export default Class2;