import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../films/films.prop';
import TabOverview from './tab-overview';
import TabDetails from './tab-details';
import TabReviews from './tab-reviews';

function Tabs({film}) {
  const [isActiveTab, setActiveTab] = React.useState(0);

  const onClickHandler = (evt) => {
    setActiveTab(Number(evt.currentTarget.dataset.id));
    // eslint-disable-next-line
    console.log(evt.currentTarget.dataset.id);
  };

  const activeTabHandler = () => {
    switch (isActiveTab) {
      case 0:
        return <TabOverview film={film} />;
      case 1:
        return <TabDetails film={film} />;
      case 2:
        return <TabReviews film={film} />;
      default:
        return 'Error';
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${isActiveTab === 0 ? 'film-nav__item--active' : ''}`} onClick={onClickHandler} data-id="0">
            <span className="film-nav__link">Overview</span>
          </li>
          <li className={`film-nav__item ${isActiveTab === 1 ? 'film-nav__item--active' : ''}`}  onClick={onClickHandler} data-id="1">
            <span className="film-nav__link">Details</span>
          </li>
          <li className={`film-nav__item ${isActiveTab === 2 ? 'film-nav__item--active' : ''}`}  onClick={onClickHandler} data-id="2">
            <span className="film-nav__link">Reviews</span>
          </li>
        </ul>
      </nav>

      {activeTabHandler()}
    </div>
  );
}

Tabs.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
};

export default Tabs;
