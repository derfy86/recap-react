import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';

const SearchBar = ({ inputUser, onChangeInput }) => (
  <div className="searchBar">
    <form
      className="form"
    >
      <div className="form-input">
        <i className="share icon" />
        <input
          value={inputUser}
          className="form-input-value"
          type="text"
          placeholder="search"
          onChange={(e) => {
            const text = e.target.value;
            onChangeInput(text);
          }}
        />
      </div>
    </form>
  </div>
);

SearchBar.propTypes = {
  inputUser: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default SearchBar;
