import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addCity } from '../actions';
import styles from "./SearchBar.module.css";
import arrow from "./imgs/arrow.png"
import sol from "./imgs/sol.png"


const SearchBar = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleKeyDown = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      dispatch(addCity(search));
      setSearch('');
    };
  };

  const handleSearch = evt => {
    evt.preventDefault();
    setSearch('');
    dispatch(addCity(search));
  };

  const handleChange = evt => {
    setSearch(evt.target.value);
  };

  return (
     <div>
       <img alt="sol" className={styles.pelicula} src={sol} />
       <img alt="arrow" className={styles.flecha} src={arrow} />
       
    <div className = { styles.container }>
      <div className = { styles.buscador }>
        <input
          className = { styles.input }
          autoComplete = "off"
          name = 'city'
          placeholder = "Buscar por ciuda..."
          onKeyDown = { handleKeyDown }
          value = { search }
          onChange = { handleChange }
        />
        <button className = { styles.btn } onClick = { handleSearch }>🔍</button>
      </div> 
    </div>
    </div>
  );
};

export default SearchBar;