import {Box} from "@mui/material";
import {Outlet} from 'react-router-dom';

import {FC, useEffect, useState} from "react";
import './corePage.css';


const images = [
    {src: 'images/initialPage/carousel1.png'},
    // {src: 'images/initialPage/carousel2.png'},  Это козел, который пока плохо отображается
    {src: 'images/initialPage/carousel3.png'},
];

const CorePage: FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => prevImage === images.length - 1 ? 0 : prevImage + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box className='page-container'>
            <Box className='page-left-side'>
                <img src="images/initialPage/logo.png" alt="Рога и копыта" className="page-logo"/>
                <p className="page-subtitle">
                    Бесплатная бухгалтерия<br/>
                    для самозанятых
                </p>

                <Box className="carousel-container">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`slide-${index + 1}`}
                            className={`carousel-image ${index === currentImage ? 'active' : ''}`}
                        />
                    ))}
                </Box>

                <Box className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentImage ? 'active' : ''}`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </Box>
            </Box>

            <Box className="page-right-side">
                <Outlet/>
            </Box>
        </Box>
    );
}

export default CorePage