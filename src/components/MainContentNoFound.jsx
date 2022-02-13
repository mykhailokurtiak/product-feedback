import './MainContentNoFound.scss';
import logoNoFound from '../assets/suggestions/illustration-empty.svg';
import { NavLink } from 'react-router-dom';

const MainContentNoFound = () => {
  return (
    <div className="product-requests-box-2" id="product-requests-box-2">
      <img src={logoNoFound} alt="empty" />
      <h1>There is no feedback yet.</h1>
      <h2>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </h2>
      <button className="btn-add">
        <NavLink className="btn-add-link" to="/new-feedback">
          + Add Feedback
        </NavLink>
      </button>
    </div>
  );
};

export default MainContentNoFound;
