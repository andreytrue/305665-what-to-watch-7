import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reviewFilm } from '../../store/api-actions';
import { makeArray, isAvailableToSend } from '../../utils/common';
import { reviewIsLoading } from '../../store/action';
import { getReviewSendingStatus } from '../../store/reviews-data/selectors';

function AddReview() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const starsArray = makeArray();
  const isLoading = useSelector(getReviewSendingStatus);

  const [reviewRate, setReviewRate] = React.useState(0);
  const [reviewComment, setReviewComment] = React.useState('');
  const [formDisable, setFormDisable] = React.useState(true);
  const [loadError, setLoadError] = React.useState(false);

  // eslint-disable-next-line
  console.log('isLoading 0', isLoading);

  const handleRateOnClick = React.useCallback((evt) => {
    setReviewRate(evt.target.value);

    setLoadError(false);
    setFormDisable(isAvailableToSend(reviewRate, reviewComment));
  }, [reviewRate, reviewComment]);

  const handleCommentOnChange = React.useCallback((evt) => {
    setReviewComment(evt.target.value);

    setLoadError(false);
    setFormDisable(isAvailableToSend(reviewRate, reviewComment));
  }, [reviewRate, reviewComment]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line
    console.log('isLoading 1', isLoading);
    dispatch(reviewIsLoading(true));
    // eslint-disable-next-line
    console.log('isLoading 2', isLoading);
    const filmReview = await dispatch(reviewFilm({
      rating: Number(reviewRate),
      comment: reviewComment,
    }, id));
    if (!filmReview) {
      setLoadError(true);
    }
  };

  return (
    <div className="add-review">
      {loadError
        ? <p style={{color: 'red'}}>Ошибка отправки формы. Внесите изменения в отзыв</p>
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
            <button className="add-review__btn" type="submit" onClick={ handleSubmit } disabled={formDisable || isLoading}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReview;
