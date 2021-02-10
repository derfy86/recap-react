import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';

const SearchBar = () => (
  <div className="searchBar">
    <form
      className="form"
    >
      <div className="form-input">
        <i className="share icon" />
        <input
          className="form-input-value"
          type="text"
          placeholder="search"
          defaultValue=""
        />
      </div>
    </form>
  </div>
);

SearchBar.propTypes = {

};

export default SearchBar;
