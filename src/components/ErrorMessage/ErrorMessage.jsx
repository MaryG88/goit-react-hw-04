import s from "./ErrorMessage.module.css";

export const ErrorMessage = ({ message }) => {
  return (
    <span className={s.errorMessage}>
      {" "}
      {message}
    </span>
  );
};
