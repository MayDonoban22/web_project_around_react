import React, { children } from "react";

function PopupWithForm({
  onClose,
  name,
  title,
  isOpen,
  onSubmit,
  children,
  buttonText = "Guardar",
}) {
  function handleClick(e) {
    e.preventDefault();
    onSubmit();
  }

  function handleClickClose() {
    onClose();
  }
  return (
    <>
      <div className={`popup ${isOpen ? "popup_show" : ""}`} id={name}>
        <form
          className={`popup__form popup_type_${name} popup__edit-profile`}
          id="form-profile"
        >
          <button
            type="button"
            onClick={handleClickClose}
            className="popup__close"
          ></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            onClick={handleClick}
            className="popup__update"
            type="submit"
            id="btn"
          >
            {buttonText}
          </button>
        </form>
        <div className="popup__overlay"></div>
      </div>
    </>
  );
}

export default PopupWithForm;
