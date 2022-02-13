import './MainContentHeader.scss';
import logo from '../assets/suggestions/icon-suggestions.svg';

import useMainContentSortBy from './MainContentSortBy';
import { NavLink } from 'react-router-dom';

const useMainContentHeader = () => {
  const { sortByRender, sortedBy } = useMainContentSortBy();

  return {
    sortedBy,
    MainContentHeaderRender: (
      <div className="main-header">
        <img className="icon-logo" src={logo} alt="logo" />
        <h1 className="mob-hidden">8 Suggestions</h1>

        {sortByRender}

        <button className="btn-add">
          <NavLink className="btn-add-link" to="/new-feedback">
            + Add Feedback
          </NavLink>
        </button>
      </div>
    ),
  };
};

export default useMainContentHeader;
