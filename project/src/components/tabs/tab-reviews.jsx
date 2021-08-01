import React from 'react';
import PropTypes from 'prop-types';
import reviewsProp from '../review/reviews.prop';
import { DateOptions } from '../../utils/const';

function TabReviews({reviews}) {
  const convertDate = (data) => {
    const date = new Date(data);
    return date.toLocaleString('en-US', DateOptions);
  };

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{convertDate(review.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ),
        )}
      </div>
    </div>
  );
}

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsProp)).isRequired,
};

export default TabReviews;
