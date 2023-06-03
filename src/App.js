import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';

import { ROUTES } from './helpers/RoutesPath';

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'gerson@email.com';
  const PASSWORD = '1Password';
  const HOME_ROUTE = ROUTES.HOME;

  useEffect(() => {
    if (!access) {
      navigate('/');
    }

  }, [access, navigate]);
  

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  function login(userData) {
    if (userData.password === PASSWORD && userData.username === EMAIL) {
      setAccess(true);
      navigate(HOME_ROUTE);
    
    }else {
      window.alert("Usuario o Contraseña incorrectos");
  }}

  return (
    <div className="App">
        <Nav onSearch={onSearch} />
        <Routes>
        <Route path={ROUTES.FORM} element={<Form login={login} />} />
        <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.DETAIL} element={<Detail />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;