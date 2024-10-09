import '../../css/footer.css';
import logo_polytech from '../../assets/logo_polytech.png';
import logo_usmb from '../../assets/logo_usmb.png';

export default function Footer () {
    return (<>
    <div className='footer-half footer-top'>
        <div className='partners-logos'>

        </div>
        <div className='vert-hr'></div>
        <h2>Partenaires</h2>
    </div>

    <div className='footer-half footer-bottom'>
        <div className='footer-bottom-top'>
            <div className='footer-bottom-left'>
                <h2>Nous contacter</h2>
                <span>&nbsp;<i class="fa-brands fa-square-instagram"></i>&nbsp;@polytechmontblanc</span>
                <span>&nbsp;<i class="fa-solid fa-square-envelope"></i>&nbsp;contact@polytech-montblanc.fr</span>
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