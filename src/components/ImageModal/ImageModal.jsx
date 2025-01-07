import Modal from "react-modal";
import s from "./ImageModal.module.css";

export const ImageModal = ({
  modalIsOpen,
  modalOnClose,
  author,
  likes,
  alt,
  src,
}) => {
  return (
    <Modal
      className={s.modal}
      overlayClassName={s.modalOverlay}
      isOpen={modalIsOpen}
      onRequestClose={modalOnClose}
      appElement={document.getElementById("root")}
    >
      <button
        className={s.modalCloseBtn}
        onClick={modalOnClose}
      >
        X
      </button>
      <div className={s.imageInfo}>
        <img
          className={s.image}
          src={src}
          alt={alt}
        />
        <p className={s.text}>{alt}</p>
        <p className={s.text}>Author: {author}</p>
        <p className={s.text}>Likes: {likes}</p>
      </div>
    </Modal>
  );
};
