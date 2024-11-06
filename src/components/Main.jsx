import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <main className="content">
      <section className="content__profile">
        <div className="content__pencil">
          <img className="content__image" src={props.profileAvatar} />
          <button
            onClick={props.onEditAvatarclick}
            className="content__image-overlay"
          ></button>
        </div>

        <div className="content__info">
          <span className="content__name">{props.profileName}</span>
          <p className="content__profession">{props.profileAbout}</p>
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
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
