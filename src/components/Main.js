import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';



function Main(props) {

    const [useAvatar, setUseAvatar] = useState(false);
    const [useProfile, setUseProfile] = useState(false);
    const [usePlace, setUsePlace] = useState(false);

    function handleEditAvatarClick() {
        setUseAvatar(!useAvatar);
    }
    function handleEditProfileClick() {
        setUseProfile(!useProfile);
    }
    function handleAddPlaceClick() {
        setUsePlace(!usePlace);
    }

    // const popupProfile = document.querySelector("#popup-profile")
    // const popupPlace = document.querySelector("#popup-place")
    // const editAvatar = document.querySelector("#edit-avatar")
    // function handleEditProfileClick() {
    //     popupProfile.classList.add("popup_show")

    // }
    // function handleAddPlaceClick() {
    //     popupPlace.classList.add("popup_show")
    // }
    // function handleEditAvatarClick() {
    //     editAvatar.classList.add("popup_show")
    // }

    return (

        <main className="content">


            <section className="content__profile">
                <div className="content__pencil">
                    <img className="content__image" />
                    <button onClick={handleEditAvatarClick} className="content__image-overlay"></button>
                </div>

                <div className="content__info">
                    <span className="content__name">May Donoban Espitia</span>
                    <p className="content__profession">Industrial</p>
                </div>
                <button onClick={handleEditProfileClick} className="content__edit-button"></button>
                <div className="content__profile-button">
                    <button onClick={handleAddPlaceClick} className="content__plus-button"></button>
                </div>
            </section>

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


    );
}

export default Main;