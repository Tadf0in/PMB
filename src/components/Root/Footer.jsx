import '../../css/footer.css';
import logo_polytech from '../../assets/logo_polytech.png';
import logo_usmb from '../../assets/logo_usmb.png';
import logo_maxirace from '../../assets/logo_maxirace.jpg';

export default function Footer () {
    return (<>
    <div className='footer-half footer-top'>
        <div className='partners-logos'>
            <ul>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
                <li><img src={logo_maxirace} alt="maxirace" /></li>
            </ul>
        </div>
        <div className='vert-hr'></div>
        <h2>Partenaires</h2>
    </div>

    <div className='footer-half footer-bottom'>
        <div className='footer-bottom-top' id='contact'>
            <div className='footer-bottom-left'>
                <h2>Nous contacter</h2>
                <span><i className="fa-brands fa-square-instagram"></i>@polytechmontblanc</span>
                <span><i className="fa-solid fa-square-envelope"></i>contact@polytech-montblanc.fr</span>
            </div>
            <div className='footer-bottom-right'>
                <img src={logo_polytech} alt="polytech"/>
                <img src={logo_usmb} alt="usmb"/>
            </div>
        </div>
        <p>© 2024 Polytech Mont Blanc</p>
    </div>
    </>);
}