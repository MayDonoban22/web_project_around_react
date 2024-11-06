import React, { useEffect } from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import { api } from "../utils/Api";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteTrashOpen, setIsDeleteTrashOpen] = useState(false);
  const [userName, setuserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  useEffect(function () {
    api.getUsers().then((data) => {
      setuserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeleteTrashClick() {
    setIsDeleteTrashOpen(true);
  }

  function handleEditAvatar() {
    setIsEditAvatarPopupOpen(false);
  }

  function handleEditProfile() {
    setIsEditProfilePopupOpen(false);
  }

  function handleEditPlace() {
    setIsAddPlacePopupOpen(false);
  }

  function handleDeleteTrash() {
    setIsDeleteTrashOpen(false);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteTrashOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <ImagePopup
        name="popup-image"
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="edit-avatar"
        title="Actualizar foto de perfil"
        onSubmit={handleEditAvatar}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Actualizar"
      >
        <input
          type="url"
          name="avatar"
          required
          id="input-card-link"
          placeholder="imagen  URL"
          className="popup__item"
        />
        <span className="popup__input-error input-card-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="popup-profile"
        title="Editar perfil"
        onSubmit={handleEditProfile}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        name="popup-place"
        title="Nuevo lugar"
        onSubmit={handleEditPlace}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="¿Estás seguro?"
        onSubmit={handleDeleteTrash}
        isOpen={isDeleteTrashOpen}
        onClose={closeAllPopups}
        buttonText="Sí"
      ></PopupWithForm>
      <Header />
      <Main
        onEditAvatarclick={handleEditAvatarClick}
        onEditProfileclick={handleEditProfileClick}
        onEditAddPlaceclick={handleAddPlaceClick}
        onEditDeleteTrashclick={handleDeleteTrashClick}
        profileName={userName}
        profileAbout={userDescription}
        profileAvatar={userAvatar}
        cards={cards}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;
