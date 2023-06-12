import React from 'react';
import { Link } from 'react-router-dom';

const Myenrolledclass = ({cls}) => {
    return (
        <div className='col-3 p-2'>
            <div className="card align-items-center">
                <img src="https://www.digitaloutlook.com.au/wp-content/uploads/2017/09/future_payment_methods-compressor-1.jpg" height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">Class: {cls.class_name}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <Link to={`/dashboard/payment/${cls._id}`} className={cls.payment_done == false ? "btn" : "btn disabled"} ></Link>
                </div>
            </div>
        </div>
    );
};

export default Myenrolledclass;