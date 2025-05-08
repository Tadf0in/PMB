export default function parseCSV(csvText) {
    const rows = csvText.split('\n'); // Diviser le texte en lignes
    const headers = rows[0].split(','); // La première ligne contient les en-têtes de colonnes
    const data = rows.slice(1); // Le reste sont les données

    // Convertir chaque ligne de données en un objet avec les en-têtes comme clés
    const parsedData = data.map(row => {
        const values = row.split(',');
        const rowObject = {};
        headers.forEach((header, index) => {
            rowObject[header.trim()] = values[index]?.trim(); // Assurez-vous d'enlever les espaces
        });
        return rowObject;
    });

    return parsedData;
};