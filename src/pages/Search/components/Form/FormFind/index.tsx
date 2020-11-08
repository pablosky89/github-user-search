import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonGeneric from '../../../../../core/components/ButtonGeneric';
import { makeRequest } from '../../../../../core/utils/request';
import ImageLoader from '../../Loaders/ImageLoader';
import InfoLoader from '../../Loaders/InfoLoader';
import './styles.css';

type FormState = {
    company: string;
    blog: string;
    location: string;
    created_at: string;
    avatar_url: string;
    name: string;
    public_repos: number;
    followers: number;
    following: number;
}

const FormFind = () => {
    const [wasClicked, setWasClicked] = useState(false);
    const [perfil, setPerfil] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormState>({
        company: '',
        blog: '',
        location: '',
        created_at: '',
        avatar_url: '',
        name: '',
        public_repos: 0,
        followers: 0,
        following: 0
    });

    const BASE_URL = 'https://github.com';

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPerfil(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.open(`${BASE_URL}/${perfil}`)
    }

    const handleFind = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setWasClicked(true);

        makeRequest({ url: `/${perfil}` })
            .then(response => setFormData(response.data))
            .finally(() => setIsLoading(false))


    }
    return (
        <><form onSubmit={handleFind}>
            <div className="search-content-header" >
                <h1 className="search-title">Encontre um perfil Github</h1>
                <input
                    type="text"
                    className="input-search"
                    placeholder="Usuário Github"
                    onChange={handleOnChange} />
                <ButtonGeneric text="Encontrar" />
            </div>
        </form>

            {!wasClicked ? <></> : (
                <form onSubmit={handleSubmit}>
                    <div className="search-container">
                        {isLoading ? <><ImageLoader /><InfoLoader /></> : (
                            <><div className="search-content-picture">

                                <div className="card-image">
                                    <img src={formData.avatar_url} alt={formData.name} className="card-image" />
                                </div>
                                    <ButtonGeneric text="Ver perfil" />
                                


                            </div>
                                <div className="search-form">
                                    <div className="search-labels">
                                        <div className="shape-label-repositories">
                                            <h5>Repositórios públicos: {formData.public_repos}</h5>
                                        </div>
                                        <div className="shape-label-repositories">
                                            <h5>Seguidores: {formData.followers}</h5>
                                        </div>
                                        <div className="shape-label-repositories">
                                            <h5>Seguindo: {formData.following}</h5>
                                        </div>
                                    </div>
                                    <div className="form-content">
                                        <div className="text-form-content">
                                            Informações
                                </div>
                                        <input
                                            value={`   Empresa: ${formData.company}`}

                                            type="text"
                                            className="input-form-content"
                                            placeholder="Empresa:"
                                        />
                                        <input
                                            value={`   Website/Blog: ${formData.blog}`}
                                            type="text"
                                            className="input-form-content" />
                                        <input
                                            value={`   Localidade: ${formData.location}`}
                                            type="text"
                                            className="input-form-content" />
                                        <input
                                            value={`   Membro desde: ${formData.created_at}`}
                                            type="text"
                                            className="input-form-content" />

                                    </div>
                                </div></>
                        )}

                    </div>
                </form>
            )}
        </>


    )

}


export default FormFind;

