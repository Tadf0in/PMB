import React from 'react';
import blob from '../assets/blob.png';

export default function Home() {

    return (<section id='home' className='container-fluid d-flex justify-content-evenly align-items-center'>
        <div className='left'>
            <h1>
                Polytech<br />Mont<br />Blanc
            </h1>

            <div className='hr'></div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur beatae doloremque laboriosam aspernatur doloribus consequatur optio fugiat eius laudantium minima eaque officia, ipsam aperiam, error illo dicta distinctio repellat ea.
            </p>

            <button>NOUS CONTACTER</button>
        </div>
        <div className='right'>
            <img src={blob} alt="" />
        </div>
    </section>
    );
}