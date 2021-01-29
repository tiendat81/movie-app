import PropTypes from 'prop-types';
import React from 'react';
import SearchForm from './components/SearchForm';

SearchFeature.propTypes = {
  search: PropTypes.func.isRequired,
};

SearchFeature.defaultProps = {
  search: () => {},
};

function SearchFeature({ search }) {
  const handleSearch = (values) => {
    search && search(values.search);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
    </div>
  );
}

export default SearchFeature;
