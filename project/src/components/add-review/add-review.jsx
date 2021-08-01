import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reviewFilm } from '../../store/api-actions';
import { makeArray } from '../../utils/common';
import { reviewIsLoading } from '../../store/action';
import { getReviewSendingStatus } from '../../store/reviews-data/selectors';
import { isAvailableToSend } from '../../utils/common';
import { ReviewLength, RatingValues} from '../../utils/const';

function AddReview() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const starsArray = makeArray();
  const isLoading = useSelector(getReviewSendingStatus);

  const [reviewRate, setReviewRate] = React.useState(0);
  const [reviewComment, setReviewComment] = React.useState('');
  const [rateError, setRateError] = React.useState(false);
  const [reviewError, setReviewError] = React.useState(false);

  const handleRateOnClick = React.useCallback((evt) => {
    setRateError(false);
    setReviewRate(evt.target.value);
  }, []);

  const handleCommentOnChange = React.useCallback((evt) => {
    setReviewError(false);
    setReviewComment(evt.target.value);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isCommentValidityLength = (reviewComment.length > ReviewLength.MIN && reviewComment.length < ReviewLength.MAX);
    const isRateValidity = (reviewRate > RatingValues.MIN && reviewRate < RatingValues.MAX);

    if (isRateValidity && isCommentValidityLength) {
      dispatch(reviewIsLoading(true));
      dispatch(reviewFilm({
        rating: Number(reviewRate),
        comment: reviewComment,
      }, id));
    } else {
      if (isRateValidity && !isCommentValidityLength) {
        setReviewError(true);
      } else {
        setRateError(true);
      }
    }
  };

  return (
    <div className="add-review">
      {rateError
        ? <p style={{color: 'red'}}>Укажите рейтинг фильма по вашему мнению</p>
        : ''}
      {reviewError
        ? <p style={{color: 'red'}}>Длина отзыва должна быть не менее 50 и не более 400 символов</p>
        : ''}

      <form action="#" className="add-review__htmlForm">
        <div className="rating">
          <div className="rating__stars">
            {starsArray.map((item) => (
              <React.Fragment key={item}>
                <input
                  className="rating__input"
                  id={`star-${item}`}
                  type="radio"
                  name="rating"
                  value={item}
                  onClick={handleRateOnClick}
                />
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </React.Fragment>
            ),
            )}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewComment.value}
            onChange={handleCommentOnChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={ handleSubmit } disabled={isLoading || isAvailableToSend(reviewRate, reviewComment)}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReview;
