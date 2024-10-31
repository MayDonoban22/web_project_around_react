import React from 'react';


function Main() {
    return (
        <div className="page">
            <main className="content">
                <section className="content__profile">
                    <div className="content__pencil">
                        <img className="content__image" />
                        <button className="content__image-overlay"></button>
                    </div>

                    <div className="content__info">
                        <span className="content__name"></span>
                        <p className="content__profession"></p>
                    </div>
                    <button className="content__edit-button"></button>
                    <div className="content__profile-button">
                        <button className="content__plus-button"></button>
                    </div>
                </section>
                <div className="popup" id="popup-profile">
                    <form className="popup__form popup__edit-profile" id="form-profile">
                        <button className="popup__close"></button>
                        <h2 className="popup__title">Editar Perfil</h2>
                        <input
                            defaultValue="May Donoban Espitia"
                            type="text"
                            name="name"
                            id="input-name"
                            minLength="2"
                            maxLength="40"
                            placeholder="Nombre"
                            className="popup__item"
                            required
                        />
                        <span className="popup__input-error input-name-error"></span>
                        <input
                            defaultValue="Industrial"
                            type="text"
                            name="about"
                            id="input-about"
                            minLength="2"
                            maxLength="200"
                            placeholder="Acerca de mi"
                            className="popup__item"
                            required
                        />
                        <span className="popup__input-error input-about-error"></span>
                        <button className="popup__update" type="submit" id="btn">
                            Guardar
                        </button>
                    </form>
                    <div className="popup__overlay"></div>
                </div>
                <div className="popup" id="popup-place">
                    <form className="popup__form form__edit-profile" id="form-place">
                        <div className="popup__close"></div>
                        <h2 className="form__title">Nuevo Lugar</h2>
                        <input
                            type="text"
                            name="title"
                            minLength="2"
                            maxLength="40"
                            id="input-card-title"
                            placeholder="Titulo"
                            className="popup__item"
                            required
                        />
                        <span className="popup__input-error input-card-title-error"></span>
                        <input
                            type="url"
                            name="link"
                            required
                            id="input-card-link"
                            placeholder="imagen  URL"
                            className="popup__item"
                        />
                        <span className="popup__input-error input-card-link-error"></span>
                        <button className="form__update popup__update" type="submit">
                            Guardar
                        </button>
                    </form>
                    <div className="popup__overlay"></div>
                </div>
                <div className="popup" id="popup-image">
                    <div className="popup__container">
                        <button className="popup__close"></button>
                        <img src="" alt="" className="popup__picture-src" />
                        <h3 className="popup__picture-title"></h3>
                    </div>
                    <div className="popup__overlay"></div>
                </div>
                <div className="popup" id="delete-card">
                    <div className="popup__form popup__edit-profile" id="form-profile">
                        <button className="popup__close" type="button"></button>
                        <h2 className="popup__title">¿Estás seguro?</h2>
                        <button className="popup__update" id="btn">Sí</button>
                    </div>
                    <div className="popup__overlay"></div>
                </div>
                <div className="popup" id="edit-avatar">
                    <form className="popup__form form__edit-profile" id="form-place">
                        <div className="popup__close"></div>
                        <h2 className="form__title">Cambiar foto de perfil</h2>
                        <input
                            type="url"
                            name="avatar"
                            required
                            id="input-card-link"
                            placeholder="imagen  URL"
                            className="popup__item"
                        />
                        <span className="popup__input-error input-card-link-error"></span>
                        <button className="form__update popup__update" type="submit">
                            Guardar
                        </button>
                    </form>
                    <div className="popup__overlay"></div>
                </div>
                <section className="content__elements">
                    <template>
                        <div
                            className="content__element content__element-template"
                            id="card-element"
                        >
                            <img src="" alt="Places" className="content__element-picture" />
                            <div className="content__description">
                                <p className="content__description-text"></p>
                                <div className="content__likes">
                                    <button className="content__description-like"></button>
                                    <p className="content__like-number"></p>
                                </div>
                            </div>
                            <button className="content__bin"></button>
                        </div>
                    </template>
                </section>
            </main>
        </div>

    );
}

export default Main;