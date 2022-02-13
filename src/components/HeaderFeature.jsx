import { useEffect, useState, useContext } from 'react';
import './HeaderFeature.scss';
import FeatureCtx from '../hooks/DataCtx';

const HeaderFeature = () => {
  const [activeAll, setActiveAll] = useState(true);
  const [activeUi, setActiveUi] = useState(false);
  const [activeUx, setActiveUx] = useState(false);
  const [activeEnh, setActiveEnh] = useState(false);
  const [activeBug, setActiveBug] = useState(false);
  const [activeFeature, setActiveFeature] = useState(false);

  const { feature, setFeature } = useContext(FeatureCtx);

  const allHandler = () => {
    setFeature('all');
  };

  const uiHandler = () => {
    setFeature('ui');
  };

  const uxHandler = () => {
    setFeature('ux');
  };

  const enhancementHandler = () => {
    setFeature('enhancement');
  };

  const bugHandler = () => {
    setFeature('bug');
  };

  const featureHandler = () => {
    setFeature('feature');
  };

  useEffect(() => {
    setFeature('all');
  }, []);

  return (
    <div className="features">
      <button
        className={`btn-feature ${feature === 'all' ? 'active' : ''}`}
        onClick={allHandler}
      >
        All
      </button>
      <button
        className={`btn-feature ${feature === 'ui' ? 'active' : ''}`}
        onClick={uiHandler}
      >
        UI
      </button>
      <button
        className={`btn-feature ${feature === 'ux' ? 'active' : ''}`}
        onClick={uxHandler}
      >
        UX
      </button>
      <button
        className={`btn-feature ${feature === 'enhancement' ? 'active' : ''}`}
        onClick={enhancementHandler}
      >
        Enhancement
      </button>
      <button
        className={`btn-feature ${feature === 'bug' ? 'active' : ''}`}
        onClick={bugHandler}
      >
        Bug
      </button>
      <button
        className={`btn-feature ${feature === 'feature' ? 'active' : ''}`}
        onClick={featureHandler}
      >
        Feature
      </button>
    </div>
  );
};

export default HeaderFeature;
