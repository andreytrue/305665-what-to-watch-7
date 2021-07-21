import { createReducer } from '@reduxjs/toolkit';
import { loadReviews } from '../action';

const initialState = {
  reviews: [],
  isReviewLoaded: false,
};

const reviewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewLoaded = true;
    });
});

export {reviewsData};
