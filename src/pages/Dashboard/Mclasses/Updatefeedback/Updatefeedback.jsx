import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Updatefeedback = () => {

    const cls = useLoaderData();
    const navigate = useNavigate();

    const handleUpdatefeedback = event => {
        event.preventDefault();
        const form = event.target;
        const _id = cls._id;
        const feedback = form.feedback.value;
        const updateFeedback = { _id, feedback }
        fetch("http://localhost:5000/updatefeedback", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateFeedback),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast.success(`Successfully Updated Feedback`);
        navigate('/dashboard/mclasses');
    }

    return (
        <div>
            <Form onSubmit={handleUpdatefeedback}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control name='feedback' type="text" defaultValue={cls?.feedback} placeholder="Enter Feedback" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Updatefeedback;