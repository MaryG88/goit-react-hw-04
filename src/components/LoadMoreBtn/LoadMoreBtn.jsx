import s from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => (
  <button
    className={s.loadMoreBtn}
    onClick={onClick}
  >
    Load more
  </button>
);
