import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import iconLeft from '../assets/shared/icon-arrow-left.svg';
import CardInProgress from '../components/UI-UX/CardInProgress';
import CardPlanned from '../components/UI-UX/CardPlanned';
import CardLive from '../components/UI-UX/CardLive';
import '../scss/RoadMap.scss';

import { useContext } from 'react';
import FeatureCtx from '../hooks/DataCtx';

const RoadmapPage = () => {
  const [toggleClass, setToggleClass] = useState({
    planned: true,
    inprogress: false,
    live: false,
  });
  const navigate = useNavigate();

  const changeHeaderPlanned = () => {
    setToggleClass({
      planned: true,
      inprogress: false,
      live: false,
    });
  };
  const changeHeaderInProgress = () => {
    setToggleClass({
      planned: false,
      inprogress: true,
      live: false,
    });
  };
  const changeHeaderLive = () => {
    setToggleClass({
      planned: false,
      inprogress: false,
      live: true,
    });
  };

  const { feature } = useContext(FeatureCtx);

  let productRequests = JSON.parse(localStorage.getItem('productRequests'));

  if (feature !== 'all' && feature !== undefined) {
    let sortedArr = productRequests.filter((sug) => sug.category === feature);
    productRequests = sortedArr;
  }

  const plannedSugs = productRequests.filter((sug) => sug.status === 'planned');
  const inProgSugs = productRequests.filter(
    (sug) => sug.status === 'in-progress'
  );
  const liveSugs = productRequests.filter((sug) => sug.status === 'live');

  return (
    <div className="roadmap-page">
      <header className="roadmap-header">
        <div onClick={() => navigate(-1)} className="header-top">
          <img src={iconLeft} alt="icon-left" className="icon-left" />
          Go Back
        </div>
        <h1>Roadmap</h1>
        <button className="btn-add">
          <NavLink className="btn-add-link" to="/new-feedback">
            + Add Feedback
          </NavLink>
        </button>
      </header>

      {/* work for mobile device only*/}
      <div className="main-roadmap">
        <div className="status-nav">
          <div
            onClick={changeHeaderPlanned}
            className={`status-nav-head ${
              toggleClass.planned ? 'active' : null
            }`}
          >
            Planned 2
          </div>
          <div
            onClick={changeHeaderInProgress}
            className={`status-nav-head ${
              toggleClass.inprogress ? 'active' : null
            }`}
          >
            In-Progress 3
          </div>
          <div
            onClick={changeHeaderLive}
            className={`status-nav-head ${toggleClass.live ? 'active' : null}`}
          >
            Live 1
          </div>
        </div>
        {/* work for mobile device only */}

        <div className="statuses-container">
          <div
            className={`status status-planned ${
              !toggleClass.planned ? 'mob-hidden' : null
            }`}
          >
            <h2>Planned ({plannedSugs.length})</h2>
            <h3>Ideas prioritized for research</h3>
            <div id="box-roadmap-planned">
              {plannedSugs.map((sug) => (
                <CardPlanned
                  key={sug.id}
                  title={sug.title}
                  description={sug.description}
                  upvotes={sug.upvotes}
                  category={sug.category}
                  comments={
                    sug.hasOwnProperty('comments') ? sug.comments.length : 0
                  }
                  sugId={sug.id}
                  sug={sug}
                />
              ))}
            </div>
          </div>

          <div
            className={`status status-inprogress ${
              !toggleClass.inprogress ? 'mob-hidden' : null
            }`}
          >
            <h2>In-Progress ({inProgSugs.length})</h2>
            <h3>Currently being developed</h3>
            <div id="box-roadmap-inprogress">
              {inProgSugs.map((sug) => (
                <CardInProgress
                  key={sug.id}
                  title={sug.title}
                  description={sug.description}
                  upvotes={sug.upvotes}
                  category={sug.category}
                  comments={
                    sug.hasOwnProperty('comments') ? sug.comments.length : 0
                  }
                  sugId={sug.id}
                  sug={sug}
                />
              ))}
            </div>
          </div>

          <div
            className={`status status-live ${
              !toggleClass.live ? 'mob-hidden' : null
            }`}
          >
            <h2>Live ({liveSugs.length})</h2>
            <h3>Released features</h3>
            <div id="box-roadmap-inprogress">
              {liveSugs.map((sug) => (
                <CardLive
                  key={sug.id}
                  title={sug.title}
                  description={sug.description}
                  upvotes={sug.upvotes}
                  category={sug.category}
                  comments={
                    sug.hasOwnProperty('comments') ? sug.comments.length : 0
                  }
                  sug={sug}
                />
              ))}
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default RoadmapPage;
