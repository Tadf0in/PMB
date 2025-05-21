import '../css/resultats.css';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Cross() {
    const {loading, data, errors} = useFetch("cross");
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrer les résultats en fonction du numéro de dossard
    const filteredResults = data?.filter(result => {
        if (searchTerm !== '' && !isNaN(searchTerm) && !isNaN(result.Dossard)) {
            return parseInt(result.Dossard) === parseInt(searchTerm);
        }
        return result.Dossard?.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return <section id="resultats">
        <h2 className="rh2">Résultats</h2>
        <div className="hr"></div>
        {/* Barre de recherche */}
        <div className="search-container d-flex align-items-center gap-2">
            <label htmlFor="searchDossard"><i className="fa-solid fa-magnifying-glass formllabel"></i></label>
            <input
                type="text"
                id="searchDossard"
                class="form-control"
                placeholder="N° dossard"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <br />

        {/* Table des résultats */}
        <div className="table-resultats">
            {loading || !data || filteredResults.length === 0 ? (
                <p class="text-center">Aucun résultat trouvé</p>
            ) : (
                <table className="results-table table table-striped">
                    <thead>
                        <tr>
                            <th>Place</th>
                            <th>Dossard</th>
                            <th>Temps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((result, index) => (
                            <tr key={index+1}>
                                <td className="result-place fw-semibold">{index+1}.</td>
                                <td className="result-dossard">{result.Dossard}</td>
                                <td className="result-temps">{result.Temps ? result.Temps.split(':').slice(0, 2).join(':') : "??:??"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </section>
}