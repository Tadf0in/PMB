import '../css/resultats.css';
import React, { useState, useEffect } from 'react';
import parseCSV from '../utils/parseCSV';

export default function Resultats() {
    const [resultats, setResultats] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const csvFilePath = '/results.csv'; 

        fetch(csvFilePath)
            .then(response => response.text())
            .then(csvText => {
                const parsedResults = parseCSV(csvText).sort((a, b) => {
                    const timeA = a.Temps ? a.Temps.split(':').reduce((acc, time) => (60 * acc) + +time, 0) : Infinity;
                    const timeB = b.Temps ? b.Temps.split(':').reduce((acc, time) => (60 * acc) + +time, 0) : Infinity;
                    return timeA - timeB;
                });
                setResultats(parsedResults);
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier CSV:', error);
            });
    }, []);

    // Filtrer les résultats en fonction du numéro de dossard
    const filteredResults = resultats.filter(result => {
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
            <label htmlFor="searchDossard"><i class="fa-solid fa-magnifying-glass formllabel"></i></label>
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
            {filteredResults.length === 0 ? (
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
                                <td class="result-temps">{result.Temps}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </section>
}