import React from 'react';

const SearchSuggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <ul className="search-suggestions">
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => onSuggestionClick(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
