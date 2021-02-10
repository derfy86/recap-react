import React from 'react';
import './style.scss';
import Elliot from './elliot.jpg';

const CardModele = () => (
  <div className="container-profil">
    <img className="img" src={Elliot} alt="profil" />
    <div className="container-profil-text">
      <h2 className="h2">Javascript</h2>
      <h3 className="h3">Javascript/react</h3>
      <p>lorem blabla
      </p>
    </div>
  </div>
);

export default CardModele;
