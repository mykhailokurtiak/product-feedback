import './BtnEditFeedback.scss';
import { NavLink } from 'react-router-dom';

const BtnEditFeedback = () => {
  return (
    <div className="edit-feedback">
      <NavLink className="btn-edit" to="/edit">
        Edit Feedback
      </NavLink>
    </div>
  );
};

export default BtnEditFeedback;
