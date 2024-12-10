import React, { useContext } from "react";
import Card from "./Card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const userContext = useContext(CurrentUserContext);
  const { currentUser } = userContext;

  if (!currentUser) return null;

  return (
    <main className="content">
      <section className="content__profile">
        <div className="content__pencil">
          <img className="content__image" src={currentUser.avatar} />
          <button
            onClick={props.onEditAvatarclick}
            className="content__image-overlay"
          ></button>
        </div>

        <div className="content__info">
          <span className="content__name">{currentUser.name}</span>
          <p className="content__profession">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onEditProfileclick}
          className="content__edit-button"
        ></button>
        <div className="content__profile-button">
          <button
            onClick={props.onEditAddPlaceclick}
            className="content__plus-button"
          ></button>
        </div>
      </section>

      <section className="content__elements">
        {props.cards?.map((element, index) => {
          return (
            <Card
              key={index}
              card={element}
              onCardClick={props.onCardClick}
              onEditDeleteTrashclick={props.onEditDeleteTrashclick}
              onLikeClick={props.onHandleCardLike}
              onDeleteClick={props.onHandleCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
