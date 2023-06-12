import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useSelectedclasses from '../../../../hooks/useSelectedclasses';
import { toast } from 'react-toastify';

const Myselectedclass = ({ cls }) => {

    const [, refetch] = useSelectedclasses();

    const handleDelete = (cls) => {
        var result = confirm("Are you sure you want to delete?");

        if (result && cls) {
            console.log(cls);
            fetch(`https://aperture-academy-server.vercel.app/deleteaddedclass/${cls._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            refetch();
            refetch();
            toast.success(`"${cls.class_name}" deleted succesfully`);
            navigate(`/dashboard`);
        }
    }

    return (
        <div className='col-3 p-2'>
            <div className="card align-items-center">
                <img src="https://www.digitaloutlook.com.au/wp-content/uploads/2017/09/future_payment_methods-compressor-1.jpg" height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">Class: {cls.class_name}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <Link className={cls.payment_done == false ? "btn" : "btn disabled"} onClick={() => handleDelete(cls)} ><FontAwesomeIcon className='fs-2 text-danger' icon={faTrash} /></Link>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <Link to={`/dashboard/payment/${cls._id}`} className={cls.payment_done == false ? "btn" : "btn disabled"} ><FontAwesomeIcon className='fs-2 text-success' icon={faMoneyBill} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Myselectedclass;