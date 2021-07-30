import { reviewsData } from './reviews-data';
import { ActionType } from '../action';
import { reviews } from '../../mocks/reviews';

describe('Reducer: reviewsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsData(undefined, {}))
      .toEqual({
        reviews: [],
        isReviewLoaded: false,
        isReviewSending: false,
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {reviews: [], isReviewLoaded: false};
    const loadReviews = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(reviewsData(state, loadReviews))
      .toEqual({reviews, isReviewLoaded: true});
  });
});
