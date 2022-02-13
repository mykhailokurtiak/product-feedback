import './CardLive.scss';
import iconArrow from '../../assets/shared/icon-arrow-up.svg';
import iconComment from '../../assets/shared/icon-comments.svg';
import { NavLink } from 'react-router-dom';

import FeatureCtx from '../../hooks/DataCtx';
import { useContext } from 'react';

const CardLive = ({ title, description, upvotes, category, comments, sug }) => {
  const { setCurrentSug, setFeature } = useContext(FeatureCtx);

  const suggestionHandler = () => {
    setCurrentSug(sug);
  };

  const featureSelectHandler = () => {
    setFeature(category);
  };

  return (
    <div className="product-requests-box box-roadmap box-roadmap-live">
      <div className="category-type">
        <span></span> Live
      </div>

      <div className="suggestion-box">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <button className="category" onClick={featureSelectHandler}>
          {category}
        </button>
      </div>
      <div className="container">
        <div className="upvotes">
          <img src={iconArrow} alt="icon-up" />
          <p className="upvotes-value">{upvotes}</p>
        </div>

        <div className="comments">
          <NavLink to="/detail">
            <img
              src={iconComment}
              alt="icon-comment"
              onClick={suggestionHandler}
            />
          </NavLink>

          <p className="comments-sum">{comments}</p>
        </div>
      </div>
    </div>
  );
};

export default CardLive;
