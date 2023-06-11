import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Button, Form } from 'react-bootstrap';

const Addclass = () => {

    const { user } = useContext(AuthContext);

    const handleAddclass = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const class_name = form.class_name.value;
        const instructor_name = form.instructor_name.value;
        const instructor_email = form.instructor_email.value;
        const price = form.price.value;
        const available_seats = form.available_seats.value;
        const status = "pending";
        const enrolled = 0;
        const feedback = "";
        const newClass = { image, class_name, instructor_name, instructor_email, price, available_seats, status, enrolled, feedback}
        fetch("http://localhost:5000/addclass", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newClass),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        form.reset();
        toast.success(`Successfully Added ${class_name}`)
    }

    return (
        <div>
            <Form onSubmit={handleAddclass}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name='image' type="text" placeholder="Enter Picture URL" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control name='class_name' type="text" placeholder="Enter Class Name" required />
                </Form.Group>
                <Form.Group className="mb-3" readonly>
                    <Form.Label>Instructor Name</Form.Label>
                    <Form.Control name='instructor_name' type="text" defaultValue={user?.displayName} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Instructor Email</Form.Label>
                    <Form.Control name='instructor_email' type="email" defaultValue={user?.email} readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Available Seats</Form.Label>
                    <Form.Control name='available_seats' type="number" placeholder="Enter Available Seat" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' type="number" step="0.01" placeholder="Enter Price" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Addclass;