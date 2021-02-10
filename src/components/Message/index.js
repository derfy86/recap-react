import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Message = ({ data }) => (
  <div className="container-message">
    <p>La recherche a donné {data.total_count} résultats</p>
  </div>
);

Message.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Message;
