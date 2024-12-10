import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import PopupWithForm from "../PopupWithForm";

export default function NewCard(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  function handleSubmitNewCard() {
    props.handleAddPlace({
      name,
      link,
    });
  }
  return (
    <PopupWithForm
      name="popup-place"
      title="Nuevo lugar"
      onSubmit={handleSubmitNewCard}
      isOpen={props.isAddPlacePopupOpen}
      onClose={props.onClose}
    >
      <input
        type="text"
        name="title"
        value={name}
        minLength="2"
        maxLength="40"
        id="input-card-title"
        placeholder="Titulo"
        className="popup__item"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <span className="popup__input-error input-card-title-error"></span>
      <input
        type="url"
        name="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
        id="input-card-link"
        placeholder="imagen  URL"
        className="popup__item"
      />
      <span className="popup__input-error input-card-link-error"></span>
    </PopupWithForm>
  );
}
