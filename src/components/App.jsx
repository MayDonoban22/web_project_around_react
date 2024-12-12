import { useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

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
      setCards((state) => [newCard, ...state]);
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
        setCurrentUser({ ...currentUser, avatar: newData.avatar });
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
          selectedCard={selectedCard}
          closeAllPopups={closeAllPopups}
          handleEditAvatar={handleEditAvatar}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          handleEditProfile={handleEditProfile}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          handleCreateCard={handleCreateCard}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          handleDeleteTrash={handleDeleteTrash}
          isDeleteTrashOpen={isDeleteTrashOpen}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
