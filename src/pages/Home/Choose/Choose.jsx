import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Choose = () => {
    return (
        <div className='mt-5 text-white'>
            <div className='bg-image p-5' style={{ backgroundImage: `url("https://i.pinimg.com/originals/0b/3d/0c/0b3d0c7d4cba82343643a5f4c48e2fba.gif")`, backgroundAttachment: "fixed" }}>
                <Fade>
                    <h1 className='text-center'>Why Choose AA?</h1>
                    <div className='row g-0 justify-content-around'>
                        <ul className='col-md-5'>
                            <li>1000s videos, worksheets, lighting set-ups, Lightroom presets, raw files and much more.</li>
                            <li>Critiques of students work.</li>
                            <li>Monthly assignments.</li>
                        </ul>
                        <ul className='col-md-5'>
                            <li>Exclusive members discounts on photography brands and services.</li>
                            <li>Personalised support.</li>
                            <li>Learn in your own time at your own pace. </li>
                        </ul>
                    </div>
                    <hr />
                    <div className='text-center'>
                        <h3 >We have 100% confidence in our courses!</h3>
                        <p>
                            We offer a no-risk solution here at The School of Photography - If you don’t learn anything, we will give you your money back! I offer this because I have a degree in photography, a post-graduate degree in education, I’m a fully qualified teacher and have been teaching photography since 2002. All of this experience goes into making these courses. We know that our courses will make you excellent photographers just like they have done for 1000s of others.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Choose;