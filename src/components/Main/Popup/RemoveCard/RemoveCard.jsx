import PopupWithForm from "../PopupWithForm";

export default function RemoveCard(props) {
  return (
    <PopupWithForm
      name="delete-card"
      title="¿Estás seguro?"
      onSubmit={props.handleDeleteTrash}
      isOpen={props.isDeleteTrashOpen}
      onClose={props.onClose}
      buttonText="Sí"
    ></PopupWithForm>
  );
}
