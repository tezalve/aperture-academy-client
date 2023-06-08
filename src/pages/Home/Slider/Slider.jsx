import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/fullscreen-57.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Unleash your photography potential</h3>
                        <p>Inspire. Learn. Create.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/fullscreen-39.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Capture the world through your lens</h3>
                        <p>Experience the magic of aperture</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/fullscreen-61.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Discover the beauty in every frame</h3>
                        <p>Empowering photographers since [2023]</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;