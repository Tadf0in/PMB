import { NavLink } from 'react-router-dom';
import blob from '../../assets/blob.png';

export default function Home() {

    return (<section id='home'>
        <div className='home-half left'>
            <h1>
                Polytech<br />Mont<br />Blanc
            </h1>

            <div className='hr'></div>

            <p>
                Polytech Mont Blanc est un club de l'école Polytech Annecy-Chambéry qui a pour objectif de faire monter 20 étudiants au sommet de l'Europe.
            </p>

            <NavLink to="/contact" className='nav-link home-btn'>NOUS CONTACTER</NavLink>
        </div>
        <div className='home-half right'>
            <img src={blob} alt="" />
        </div>
    </section>
    );
}