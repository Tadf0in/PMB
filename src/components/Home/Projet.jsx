import montblanc from "../../assets/montblanc.jpg";

export default function Projet() {
    return (<section id="projet">
        <div className="projet-left">
            <img src={montblanc} alt="Mont Blanc" />
        </div>
        <div className="projet-right">
            <h2 className="rh2">Le projet</h2>
            <div className="hr"></div>
            <p>
                Depuis 20 ans, les élèves de 3ème année de l’école Polytech Annecy-Chambéry relèvent le défi de gravir le toit de l’Europe.
                <br/><br/>
                L’objectif, au-delà de gravir le Mont-Blanc, est avant tout une aventure humaine fondée sur l’esprit d’équipe, la solidarité, la persévérance et le dépassement de soi. Tant de valeurs qui auront toute leur importance dans les futures carrières des étudiants de l’Université de Savoie, et dans leur vie quotidienne.
            </p>
        </div>
    </section>
    );
}
