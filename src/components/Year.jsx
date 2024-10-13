import '../css/year.css';
import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react';
import { loadImages } from '../utils/loadImages';


export default function Year() {
    const { year } = useParams();

    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            const loadedImages = await loadImages();
            setImages(loadedImages[year] || []);
        };
        fetchImages();
    }, [year]);

    return (<>
        <h2 className='carousel-title'>Ascenscion {year}</h2>
        <div id="carouselYear" className="carousel slide">
            <div className="carousel-indicators">
                {images.map((_, i) => (
                    <button 
                        key={i} 
                        type="button" 
                        data-bs-target="#carouselYear" 
                        data-bs-slide-to={i} 
                        className={i === 0 ? "active" : ""} 
                        aria-current={i === 0 ? "true" : "false"} 
                        aria-label={`Slide ${i + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.length > 0 ? (
                    images.map((src, i) => (
                    <div className={"carousel-item" + (i == 0 ? " active" : "")} key={i}>
                        <img key={i} src={src} className="d-block w-100" alt={`Image ${i + 1} de ${year}`} />
                    </div>
                ))) : (
                    <p>Aucune image disponible pour cette année.</p>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselYear" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselYear" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>);
}
