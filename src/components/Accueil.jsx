import '../css/home.css';
import '../css/infos.css';
import Equipe from './Home/Equipe';

import Home from "./Home/Home"
import Infos from "./Home/Infos"
import Projet from './Home/Projet';

export default function Accueil() {
  return (<>
        <Home />
        <Infos />
        <Projet />
        <Equipe />
    </>
  );
}