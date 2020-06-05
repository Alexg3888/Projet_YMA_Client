import React, { useState, useEffect } from "react";
import Error from "../Error";
import {getOffreMomentData} from "../../services/ApiService";

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [offres, setOffres] = useState([]);

    useEffect(() => {
        getOffreMomentData()
            .then(result =>setOffres(result.data['hydra:member']))
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true))
    }, [])

    if (error) {
        return (
            <>
                <div>Une erreur est survenue</div>
                <Error error={error} />
            </>
        )
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                <div className="container">
                {offres}
                </div>
            </>
        );
    }
}

export default Home;