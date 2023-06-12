import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import './Class2.css'
import { AuthContext } from '../../../Providers/AuthProviders';
import { toast } from 'react-toastify';

const Class2 = ({ cls }) => {

    const { user } = useContext(AuthContext);

    const [individual, setIndividual] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/individual/${user?.email}`)
            .then(res => res.json())
            .then(data => setIndividual(data))
    },)

    const handleSelect = () => {
        if (individual.role === 'student') {
            const user_email = individual.email;
            const class_id = cls._id;
            const class_name = cls.class_name;
            const instructor = cls.instructor;
            const payment_done = false;
            const addedclass = { user_email, class_id, payment_done, instructor, class_name };
            fetch("http://localhost:5000/addedclasses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addedclass),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            toast.success(`Successfully Added ${class_name}`)
        } else if (!user) {
            toast.warn("Please Log in");
        } else {
            toast.warn("Only Student can select");
        }
    }

    return (
        <div className='col-md-12 p-5'>
            <div className={cls.available_seats <= 0 ? "card flex-row align-items-center bg-danger" : "card flex-row align-items-center"}>
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
                    <a className={cls.available_seats <= 0 ? "btn disabled" : "btn"} onClick={handleSelect}><FontAwesomeIcon className='plus' icon={faCirclePlus} /></a>
                </div>
            </div>
        </div>
    );
};

export default Class2;