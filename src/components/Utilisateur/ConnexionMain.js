import React from "react";
import {useForm} from "react-hook-form";
import {login} from "../../services/ApiService";
import {useHistory} from "react-router-dom";

function ConnexionMain(props) {
    const {handleSubmit, register, errors} = useForm();

    const history = useHistory();

    const onSubmit = values => {
        login(values.email, values.password)
            .then(() => {
                props.handleLoginState(true)
                alert('utilisateur connecté')
                history.push("/"); //redirection homepage
            })

            //TODO YC : Gérer correctement l'erreur d'appel a l'API
            .catch(async (e) => {
                alert('Erreur API BackEnd lors de l\'obtention du token, voir console')
                console.log(e)
            })
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="container"> 
        <div class="row mt-5">
                <div className="col">
            <div className="form-group mt-5">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.email && errors.email.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    className="form-control"
                    defaultValue="password123"
                    name="password"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                            message: "Mot de passe invalide"
                        }
                    })}/>
                <small className="form-text text-mute">8 caractères minimum dont un chiffre et une lettre</small>
                <small
                    className="form-text text-muted text-warning">{errors.password && errors.password.message}</small>
            </div>

            <button type="submit" className="btn btn-warning">Envoyer</button>

            {/*TODO YC : Gérer la perte de mot de passe*/}
        </div> 

        <div className="col">
                    <img src="/HomePage/burger-connexion.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        </div>
        </form>
    )

}

export default ConnexionMain