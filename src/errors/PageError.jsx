import { useRouteError, Link } from "react-router-dom"
// import error_img from '../assets/error.png'

export default function PageError() {
    const error = useRouteError()
  
    return (
      <div id="error-page" className="d-flex flex-column align-items-center justify-content-center">
        {/* <img src={error_img} alt="hors piste"/> */}
        <p>Désolé, une erreur inattendue est survenue.</p>
        <p>
          {error && <i>{error.status} {error.statusText || error.message}</i>}
        </p>
        <Link to=''>Retour à l'accueil</Link>
      </div>
    )
}
  