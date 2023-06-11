import React from 'react';
import useallClasses from '../../../hooks/useallClasses';
import Mclass from './Mclass/Mclass';
import { Slide } from 'react-awesome-reveal';
import { CardGroup } from 'react-bootstrap';

const Mclasses = () => {

    const [data] = useallClasses();

    return (
        <div>
            <h1 className='text-center'>My Classes</h1>
            <Slide>
                <CardGroup>
                    {
                        data?.map(cls => <Mclass
                            key={cls._id}
                            cls={cls}
                        ></Mclass>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default Mclasses;