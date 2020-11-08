import React from 'react';
import ButtonGeneric from '../../../../../core/components/ButtonGeneric';
import SearchLabel from './components/SearchLabel';
import './styles.css';

const FormPerfil = () => {

    return (
        <form action="">
            <div className="search-container">
                <div className="search-content-picture">
                    <div className="card-image">
                    </div>
                    <ButtonGeneric text="Ver perfil" />

                </div>
                <div className="search-form">
                    <div className="search-labels">
                        <SearchLabel text="Repositórios públicos: " />
                        <SearchLabel text="Seguidores: " />
                        <SearchLabel text="Seguindo: " />
                    </div>
                    <div className="form-content">
                        <div className="text-form-content">
                            Informações
                        </div>
                        <input 
                        type="text"
                        className="input-form-content"
                        placeholder="Empresa:"
                        />
                        <input 
                        type="text"
                        className="input-form-content"
                        placeholder="Website/Blog:"
                        />
                              <input 
                        type="text"
                        className="input-form-content"
                        placeholder="Localidade:"
                        />
                              <input 
                        type="text"
                        className="input-form-content"
                        placeholder="Membro desde:"
                        />
                        
                    </div>
                </div>
            </div>
        </form>

    )
}

export default FormPerfil;