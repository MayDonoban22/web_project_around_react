function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div
      className="content__element content__element-template"
      id="card-element"
    >
      <img
        onClick={handleClick}
        src={props.card.link}
        alt="Places"
        className="content__element-picture"
      />
      <div className="content__description">
        <p className="content__description-text">{props.card.name}</p>
        <div className="content__likes">
          <button className="content__description-like"></button>
          <p className="content__like-number"></p>
        </div>
      </div>
      <button
        onClick={props.onEditDeleteTrashclick}
        className="content__bin"
      ></button>
    </div>
  );
}

export default Card;
