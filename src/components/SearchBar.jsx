import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    fetchGiphy(event.currentTarget.value);
  };
  return (
    <div>
      <input className="form-search form-control" type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
