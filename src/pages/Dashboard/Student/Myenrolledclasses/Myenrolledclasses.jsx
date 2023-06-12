import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { Slide } from 'react-awesome-reveal';
import { CardGroup } from 'react-bootstrap';
import Myenrolledclass from './Myenrolledclass';

const Myenrolledclasses = () => {

    const {user} = useContext(AuthContext);

    const [enrclasses, seteEnrclasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/enrclasses/${user?.email}`)
            .then(res => res.json())
            .then(data => seteEnrclasses(data))
    }, [])

    return (
        <div>
            <h1 className='text-center'>My Classes</h1>
            <Slide>
                <CardGroup>
                    {
                        enrclasses?.map(cls => <Myenrolledclass
                            key={cls._id}
                            cls={cls}
                        ></Myenrolledclass>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default Myenrolledclasses;