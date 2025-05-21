import '../css/resultats.css';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Tombola() {
    const {loading, data, errors} = useFetch("tombola");
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrer les résultats en fonction du nom
    const filteredResults = data?.filter(result => {
        if (searchTerm === '') {
            return false;
        }
        const terms = searchTerm.toLowerCase().split(' ').filter(Boolean);
        return terms.every(term =>
            result.Nom.toLowerCase().includes(term) ||
            result.Prenom.toLowerCase().includes(term)
        );
    });
        
    return <section id="tombola">
        <h2 className="rh2">Tombola</h2>
        <div className="hr"></div>
        {/* Barre de recherche */}
        <div className="search-container d-flex align-items-center gap-2">
            <label htmlFor="searchName"><i class="fa-solid fa-magnifying-glass formllabel"></i></label>
            <input
                type="text"
                id="searchName"
                class="form-control"
                placeholder="Nom ou prénom"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <br />

        {/* Table des résultats */}
        <div className="table-resultats">
            {loading || !data || filteredResults.length === 0 ? (
                <p class="text-center">Aucun lot pour ce nom</p>
            ) : (
                <table className="results-table table table-striped">
                    <thead>
                        <tr>
                            <th>N° Ticket</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Lot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((result, index) => (
                            <tr key={index}>
                                <td className='result-ticket'>{result.Ticket}</td>
                                <td className="result-nom">{result.Nom}</td>
                                <td className="result-prenom">{result.Prenom}</td>
                                <td className="result-lot">{result.Lot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>        

        { data && filteredResults.length > 0 && 
            <div>
                <br />
                <p className="text-center">
                    Félicitations !
                    <br />
                    Vous pouvez venir récupérer vos lots à Polytech.
                </p>
            </div>
        }
    </section>
}