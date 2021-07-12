import React from 'react';
import PropTypes from 'prop-types';

function ShowMore({filmsListAmount, onShowMoreClick}) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => onShowMoreClick(filmsListAmount)}>Show more</button>
    </div>
  );
}

ShowMore.propTypes = {
  filmsListAmount: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

export default ShowMore;
