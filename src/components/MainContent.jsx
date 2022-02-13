import { useContext, useEffect, useState } from 'react';

import useMainContentHeader from './MainContentHeader';
import ProductRequest from './ProductRequest';
import './MainContent.scss';
import MainContentNoFound from './MainContentNoFound';
import FeatureCtx from '../hooks/DataCtx';
import { sortByFilter, roadmapFeatureSorter } from '../hooks/utils';

const MainContent = ({ jsonLoaded }) => {
  const { sortedBy, MainContentHeaderRender } = useMainContentHeader();
  const [notFoundBox, setNotFoundBox] = useState(false);
  const { feature } = useContext(FeatureCtx);

  let productRequests = JSON.parse(localStorage.getItem('productRequests'));

  // filtering based on selected feature
  productRequests = roadmapFeatureSorter(feature, productRequests);
  // sorting based on click
  productRequests = sortByFilter(sortedBy, productRequests);

  useEffect(() => {
    productRequests = JSON.parse(localStorage.getItem('productRequests'));
  }, [jsonLoaded]);

  useEffect(() => {
    if (productRequests.length === 0) setNotFoundBox(true);
    if (productRequests.length > 0) setNotFoundBox(false);
  }, [productRequests]);

  return (
    <div className="main-content">
      {MainContentHeaderRender}
      {productRequests.map((productRequest) => (
        <ProductRequest
          sortedBy={sortedBy}
          productRequest={productRequest}
          key={productRequest.id}
        />
      ))}
      {notFoundBox && <MainContentNoFound />}
    </div>
  );
};

export default MainContent;
