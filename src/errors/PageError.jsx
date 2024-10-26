import { useRouteError, Link } from "react-router-dom";

import Navbar from "../components/Root/Navbar";
import Footer from "../components/Root/Footer";

// import error_img from '../assets/error.png'

export default function PageError() {
    const error = useRouteError()
  
    return (<>
      <div id="scrolltop"></div>
      <header>
          <Navbar />
      </header>
      <div id="error-page" className="Outlet mt-5">
          {/* <img src={error_img} alt="hors piste"/> */}
          <p>Désolé, une erreur inattendue est survenue.</p>
          <p>
            {error && <i>{error.status} {error.statusText || error.message}</i>}
          </p>
          <Link to=''>Retour à l'accueil</Link>
      </div>
      <footer>
          <Footer />
      </footer>
  </>);
}
  