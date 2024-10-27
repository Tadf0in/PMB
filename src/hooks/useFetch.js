import { useEffect, useState } from "react";
import jsonToObjects from "../utils/jsonToObjects";

export default function useFetch (url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const sheetId = "1wGUep2CenIbeaFqFMuAaj6lHicCcddCkvN5KWWocCDk";
    const sheetName = url;
    const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    useEffect(() => {
        fetch(sheetURL)
        .then((res) => res.text())
        .then((json) => {
            setData(jsonToObjects(json))
        })
        .catch((err) => setErrors(err))
        .finally(() => setLoading(false))
    }, []);

    return {
        loading, data, errors
    };
}