import { createReducer } from '@reduxjs/toolkit';
import { loadReviews, reviewIsLoading } from '../action';

const initialState = {
  reviews: [],
  isReviewLoaded: false,
  isReviewSending: false,
};

const reviewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewLoaded = true;
    })
    .addCase(reviewIsLoading, (state, action) => {
      state.isReviewSending = action.payload;
    });
});

export {reviewsData};
