import { useContext } from 'react';
import FeatureCtx from '../hooks/DataCtx';
import { NavLink, Link } from 'react-router-dom';

import iconUp from '../assets/shared/icon-arrow-up.svg';
import iconComment from '../assets/shared/icon-comments.svg';
import './ProductRequest.scss';

const ProductRequest = ({ productRequest }) => {
  const { setCurrentSug, setFeature } = useContext(FeatureCtx);

  return (
    <div className="product-requests-box" key={productRequest.id}>
      <div className="upvotes">
        <img src={iconUp} alt="arrow-up" />
        <p className="upvotes-value">{productRequest.upvotes}</p>
      </div>
      <div className="suggestion-box">
        <div className="title">{productRequest.title}</div>
        <div className="description">{productRequest.description}</div>
        <button
          className="category"
          onClick={() => setFeature(productRequest.category)}
        >
          {productRequest.category}
        </button>
      </div>

      <div
        className="comments"
        onClick={() => {
          setCurrentSug(productRequest);
        }}
      >
        <Link to="/detail">
          <img src={iconComment} alt="icon-comment" />
        </Link>
        <p className="comments-sum">
          {productRequest.comments ? productRequest.comments.length : 0}
        </p>
      </div>
    </div>
  );
};

export default ProductRequest;
