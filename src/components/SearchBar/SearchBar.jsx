import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch, onDeleteAll } = props;

  const [id, setId] = useState("");

  const randomId = () => {
    const randomId = Math.floor(Math.random() * 625) + 1;
    onSearch(randomId);
    setId("");
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(id);
      setId("");
    }
  };

  return (
    <>
      <div>
        <div className={styles.SearchBar}>
          <input
            type="search"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={id}
          />
          <button
            onClick={() => {
              onSearch(id);
              setId("");
            }}
          >
            Agregar
          </button>
          <button onClick={randomId}>Random</button>
          <button onClick={onDeleteAll}>Borrar Todo</button>
        </div>
      </div>
    </>
  );
}