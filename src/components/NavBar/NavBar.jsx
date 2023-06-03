import React from "react";
import { useLocation } from 'react-router-dom';
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/RoutesPath";



const Nav = (props) => {
  const { onSearch } = props;
  const location = useLocation();
  const {pathname}= useLocation();
  
  return (<>{pathname !== "/" &&
    <div>
      <div className={styles.routes}>
      <Link to={ROUTES.FORM}>Login</Link> 
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.ABOUT}>About</Link>
      <Link to={ROUTES.FAVORITES}>Favorites</Link>
      </div>
      <div>{location.pathname === '/home/' && (
      <SearchBar onSearch={onSearch} />)}
      </div>
      
    </div>}
    </>
  );
};

export default Nav;