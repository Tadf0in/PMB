import React, { useState, useEffect } from 'react';
import annecy from '../../assets/br/annecy.jpg';
import chambery from '../../assets/br/chambery.jpg';

export default function Equipe(params) {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const imagesAnnecy = import.meta.glob('../../assets/br/annecy/*.jpg');
            const imagesChambery = import.meta.glob('../../assets/br/chambery/*.jpg');

            const imagesAnnecyArray = Object.entries(imagesAnnecy).map(async ([key, value]) => {
                const [prenom, role] = key
                .replace('../../assets/br/annecy/', '')
                .replace('.jpg', '')
                .split('-');

                const { default: src } = await value(); 
                return { ville : "annecy", prenom, role, src };
            });

            const imagesChamberyArray = Object.entries(imagesChambery).map(async ([key, value]) => {
                const [prenom, role] = key
                .replace('../../assets/br/chambery/', '')
                .replace('.jpg', '')
                .split('-');

                const { default: src } = await value(); 
                return { ville: "chambery", prenom, role, src };
            });

            const allImagesArray = [...imagesAnnecyArray, ...imagesChamberyArray];

            const resolvedPhotos = await Promise.all(allImagesArray);
            setPhotos(resolvedPhotos);
            setLoading(false);
        };

        loadImages();
    }, []);
    
    return (<section id="equipe">
        <h2 className="rh2">Notre équipe</h2>
        <div className="hr"></div>

        <div className='bureaux'>
            { ["annecy", "chambery"].map((site, i) => (
            <div className={ "bureau equipe-" + site }>
                <img src={annecy} alt={site} className='photo-br'/>
                <div className='org-br'>
                    <h3>Bureau d{ site == "annecy" ? "'Annecy" : "e Chambéry"}</h3>
                    <div className='list-br'>
                        { loading ? <p>Chargement des photos</p> :
                        photos.map(({ ville, prenom, role, src }) => (<>
                            { ville === site ?
                            <div key={prenom + '-' + role} className='membre-br'>
                                <img src={src} alt={prenom + "-" + role} />
                                <span>{prenom}</span>
                                <span>{role}</span>
                            </div>
                            : " " }</>
                        ))}
                    </div>
                </div>
            </div>
            ))};
        </div>
    </section>
    );
}
