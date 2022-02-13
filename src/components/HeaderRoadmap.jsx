import { NavLink } from 'react-router-dom';
import './HeaderRoadmap.scss';

const HeaderRoadmap = ({ allStats }) => {
  return (
    <div className="roadmap-box">
      <div className="head">
        <h2>Roadmap</h2>
        <NavLink className="link" to="/roadmap">
          View
        </NavLink>
      </div>
      <div className="row">
        <div className="dot-planned"></div>
        <h2>Planned</h2>
        <h3>{allStats.allPlanned.length}</h3>
      </div>
      <div className="row">
        <div className="dot-in-progress"></div>
        <h2>In-Progress</h2>
        <h3>{allStats.allInProgress.length}</h3>
      </div>
      <div className="row">
        <div className="dot-live"></div>
        <h2>Live</h2>
        <h3>{allStats.allLive.length}</h3>
      </div>
    </div>
  );
};

export default HeaderRoadmap;
