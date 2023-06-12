import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Myclass from './Myclass/Myclass';
import { Button, CardGroup, Modal } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import useInsclasses from '../../../hooks/useInsclasses';

const Myclasses = () => {

    const { user } = useContext(AuthContext);

    const [data] = useInsclasses(user.email);

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(p => !p);
    const [message, setMessage] = useState('');
    const getmessage = (msg) => {
        setMessage(msg);
    }
    console.log(message);
    return (
        <div>
            <Modal show={show} onHide={toggleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleShow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
                <h1 className='text-center'>My Classes</h1>
                <Slide>
                    <CardGroup>
                        {
                            data?.map(cls => <Myclass
                                key={cls._id}
                                cls={cls}
                                toggleShow={toggleShow}
                                getmessage={getmessage}
                            ></Myclass>)
                        }
                    </CardGroup>
                </Slide>
            </div>
        </div>
    );
};

export default Myclasses;