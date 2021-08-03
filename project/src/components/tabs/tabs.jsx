import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';
import reviewsProp from '../review/reviews.prop';
import TabOverview from './tab-overview';
import TabDetails from './tab-details';
import TabReviews from './tab-reviews';
import { TabValues } from '../../utils/const';
import { adaptTabName } from '../../utils/common';

function Tabs({film, reviews}) {
  const [isActiveTab, setActiveTab] = React.useState(0);

  const tabsArray = Array(3).fill();

  const onClickHandler = (evt) => {
    setActiveTab(Number(evt.currentTarget.dataset.id));
  };

  const activeTabHandler = () => {
    switch (isActiveTab) {
      case TabValues.OVERVIEW:
        return <TabOverview film={film} />;
      case TabValues.DETAILS:
        return <TabDetails film={film} />;
      case TabValues.REVIEWS:
        return <TabReviews film={film} reviews={reviews} />;
      default:
        return 'Error';
    }
  };

  const onTabName = (index) => {
    const result = Object.keys(TabValues)[index];

    return adaptTabName(result);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsArray.map((activeTabClassName = 'film-nav__item--active', index) => (
            <li className={`film-nav__item ${isActiveTab === index ? activeTabClassName : ''}`} onClick={onClickHandler} data-id={index} key={Object.values(TabValues)[index]}>
              <span className="film-nav__link">{onTabName(index)}</span>
            </li>
          ),
          )}
        </ul>
      </nav>

      {activeTabHandler()}
    </div>
  );
}

Tabs.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsProp)).isRequired,
};

export default Tabs;
