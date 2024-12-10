import { useEffect } from "react";
import ImagePopup from "./Popup/ImagePopup/ImagePopup";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfile from "./Popup/EditProfile/EditProfile";
import NewCard from "./Popup/NewCard/NewCard";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import RemoveCard from "./Popup/RemoveCard/RemoveCard";

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
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCard, setCurrentCard] = useState("");

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    console.log(isLiked);

    await api
      .changeLikeCardStatus(card._id, card.isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => {
        console.error("Error al eliminar la tarjeta:", error);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  useEffect(function () {
    api.getUsers().then((data) => {
      setuserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
      setCurrentUser(data);
    });
    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  function handleCreateCard(card) {
    api.createCard(card).then((newCard) => {
      setCards((state) => [...state, newCard]);
      closeAllPopups();
    });
  }

  const handleUpdateUser = (name, about) => {
    (async () => {
      await api.editUser(name, about).then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      });
    })();
  };
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.editAvatar(data).then((newData) => {
        setUserAvatar(newData);
        closeAllPopups();
      });
    })();
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeleteTrashClick(card) {
    setIsDeleteTrashOpen(true);
    setCurrentCard(card);
  }

  function handleEditAvatar(data) {
    handleUpdateAvatar(data);
    setIsEditAvatarPopupOpen(false);
  }

  function handleEditProfile(data) {
    handleUpdateUser(data.name, data.about);
    setIsEditProfilePopupOpen(false);
  }

  function handleEditPlace() {
    setIsAddPlacePopupOpen(false);
  }

  function handleDeleteTrash() {
    setIsDeleteTrashOpen(false);
    handleCardDelete(currentCard);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteTrashOpen(false);
    setSelectedCard(false);
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <ImagePopup
          name="popup-image"
          selectedCard={selectedCard}
          onClose={closeAllPopups}
        />
        <EditAvatar
          handleEditAvatar={handleEditAvatar}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <EditProfile
          handleEditProfile={handleEditProfile}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <NewCard
          handleAddPlace={handleCreateCard}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <RemoveCard
          handleDeleteTrash={handleDeleteTrash}
          isDeleteTrashOpen={isDeleteTrashOpen}
          onClose={closeAllPopups}
        />

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
          onHandleCardLike={handleCardLike}
          onHandleCardDelete={handleCardDelete}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
