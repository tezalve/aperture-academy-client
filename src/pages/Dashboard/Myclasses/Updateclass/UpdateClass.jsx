import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useInsclasses from '../../../../hooks/useInsclasses';
import { toast } from 'react-toastify';

const UpdateClass = () => {

    const cls = useLoaderData();

    const navigate = useNavigate();

    const [, refetch] = useInsclasses();

    const handleUpdateClass = event => {
        event.preventDefault();
        const form = event.target;
        const _id = cls._id;
        const image = form.image.value;
        const class_name = form.class_name.value;
        const instructor_name = form.instructor_name.value;
        const instructor_email = form.instructor_email.value;
        const price = form.price.value;
        const available_seats = form.available_seats.value;
        const updateClass = { _id, image, class_name, instructor_name, instructor_email, price, available_seats }
        fetch("http://localhost:5000/updateclass", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateClass),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast.success(`Successfully Updated ${class_name}`);
        navigate('/dashboard/myclasses');
    }

    return (
        <div>
            <Form onSubmit={handleUpdateClass}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='image' type="text" defaultValue={cls?.image} placeholder="Enter Picture URL" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control name='class_name' type="text" defaultValue={cls?.class_name} placeholder="Enter Class Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Instructor Name</Form.Label>
                    <Form.Control name='instructor_name' type="text" defaultValue={cls?.instructor_name} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Instructor Email</Form.Label>
                    <Form.Control name='instructor_email' type="email" defaultValue={cls?.instructor_email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available Seats</Form.Label>
                    <Form.Control name='available_seats' type="number" defaultValue={cls?.available_seats} placeholder="Enter Available Seat" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="number" step="0.01" defaultValue={cls?.price} placeholder="Enter Price" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UpdateClass;