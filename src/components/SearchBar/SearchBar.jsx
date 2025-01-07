import { useState } from "react";
import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter the query!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <Toaster
        className={s.toaster}
        position="top-right"
        reverseOrder={false}
      />
      <form
        className={s.form}
        onSubmit={handleSubmit}
      >
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          className={s.submitBtn}
          type="submit"
        >
          <IoIosSearch className={s.searchIcon} />
        </button>
      </form>
    </header>
  );
};
