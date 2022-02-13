import { useState } from 'react';

import HeaderLogo from './HeaderLogo';
import './Header.scss';
import HeaderFeature from './HeaderFeature';
import HeaderRoadmap from './HeaderRoadmap';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const btnToggleClass = () => {
    setIsActive(!isActive);
  };

  const productRequests = JSON.parse(localStorage.getItem('productRequests'));

  const allSug = productRequests.filter((item) => item.status === 'suggestion');
  const allPlanned = productRequests.filter(
    (item) => item.status === 'planned'
  );
  const allInProgress = productRequests.filter(
    (item) => item.status === 'in-progress'
  );
  const allLive = productRequests.filter((item) => item.status === 'live');

  const allStatuses = {
    allSug,
    allPlanned,
    allInProgress,
    allLive,
  };

  return (
    <div className="header">
      <HeaderLogo />
      <div
        onClick={btnToggleClass}
        className={`btn-hamburger ${isActive ? 'activated' : null}`}
      ></div>
      <div className={`${isActive ? 'bg-dark' : null}`}></div>
      <div className={`board-container ${!isActive ? 'mobile' : null}`}>
        <HeaderFeature />
        <HeaderRoadmap allStats={allStatuses} />
      </div>
    </div>
  );
};

export default Header;
