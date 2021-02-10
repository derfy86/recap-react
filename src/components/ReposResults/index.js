import React from 'react';
import PropTypes from 'prop-types';
import CardModele from './card';
import './style.scss';

const ReposResults = () => (
  <div className="solo">
    <div className="container-reposResults">
      <CardModele />
      <CardModele />
      <CardModele />
      <CardModele />
      <CardModele />
      <CardModele />
      <CardModele />
      <CardModele />
      <CardModele />
    </div>
  </div>
);

ReposResults.propTypes = {

};

export default ReposResults;
