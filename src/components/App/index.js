// == Import npm
import React from 'react';

// == Import
import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import Logo from './logo-github.png';
import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <div className="container">
      <img className="logo" src={Logo} alt="logo github" />
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  </div>
);

// == Export
export default App;
