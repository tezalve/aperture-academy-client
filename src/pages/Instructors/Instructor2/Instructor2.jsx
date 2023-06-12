import React from 'react';

const Instructor2 = ({ ins }) => {
    return (
        <div className='col-md-12 p-5'>
            <div className="card flex-row align-items-center">
                <img src={ins.photoURL} width={"100px"} height={"100px"} className="" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">Name: {ins.displayName}</h5>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Email: {ins.email}</h5>
                </div>
            </div>
        </div>
    );
};

export default Instructor2;