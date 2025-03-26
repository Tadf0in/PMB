import '../../css/footer.css';
import logo_polytech from '../../assets/logo_polytech.png';
import logo_usmb from '../../assets/logo_usmb.png';
import logo_maxirace from '../../assets/partners/logo_maxirace.png';
// import logo_bde from '../../assets/partners/logo_bde.png';
import logo_paul from '../../assets/partners/logo_paul.png';
import logo_jsdsport from '../../assets/partners/logo_jsdsport.jpg';
// import logo_spacebloc from '../../assets/partners/logo_spacebloc.png';
import logo_set from '../../assets/partners/logo_set.png';
import logo_spartan from '../../assets/partners/logo_spartan.jpg';
import logo_marathon_annecy from '../../assets/partners/Logo_Marathon_Annecy.png';

export default function Footer () {
    return (<>
    <div className='footer-half footer-top'>
        <div className='partners-logos'>
            <ul>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
                {/* <li><img src={logo_bde} alt="bde" /></li> */}
                <li><img src={logo_jsdsport} alt="jsdsport" /></li>
                <li><img src={logo_paul} alt="paul" /></li>
                {/* <li><img src={logo_spacebloc} alt="spacebloc" /></li> */}
                <li><img src={logo_set} alt="set" /></li>
                <li><img src={logo_spartan} alt="spartan" /></li>
                <li><img src={logo_marathon_annecy} alt="marathon d'annecy" /></li>
            </ul>
        </div>
        <div className='vert-hr'></div>
        <h2 className='rh2'>Partenaires</h2>
    </div>

    <div className='footer-half footer-bottom'>
        <div className='footer-bottom-top' id='contact'>
            <div className='footer-bottom-left'>
                <h2 className='rh2'>Nous contacter</h2>
                <span><i className="fa-brands fa-square-instagram"></i><a href="https://www.instagram.com/polytechmontblanc">@polytechmontblanc</a></span>
                <span><i className="fa-solid fa-square-envelope"></i><a href="mailto:contact@polytech-montblanc.fr">contact@polytech-montblanc.fr</a></span>
            </div>
            <div className='footer-bottom-right'>
                <a href="https://www.polytech.univ-smb.fr/ecole/polytech-annecy-chambery"><img src={logo_polytech} alt="polytech"/></a>
                <a href="https://www.univ-smb.fr/"><img src={logo_usmb} alt="usmb"/></a>
            </div>
        </div>
        <p>© 2024 Polytech Mont Blanc</p>
    </div>
    </>);
}