import { NameSpace } from '../root-reducer';

export const getReviews = (state) => state[NameSpace.REVIEWS].reviews;
export const getReviewsStatus = (state) => state[NameSpace.REVIEWS].isReviewLoaded;
