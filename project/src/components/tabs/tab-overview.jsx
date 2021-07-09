import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';

function TabOverview({film}) {
  const {
    description,
    rating,
    starring,
    scoresCount,
    director,
  } = film;

  return(
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: { starring.join(', ') } and others</strong></p>
      </div>
    </Fragment>
  );
}

TabOverview.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
};

export default TabOverview;
