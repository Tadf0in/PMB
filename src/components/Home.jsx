import '../css/home.css';
import blob from '../assets/blob.png';

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

            <button onClick={() => {
                window.location = "#contact";
            }}>NOUS CONTACTER</button>
        </div>
        <div className='home-half right'>
            <img src={blob} alt="" />
        </div>
    </section>
    );
}