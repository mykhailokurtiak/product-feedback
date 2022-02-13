import { NavLink } from 'react-router-dom';
import iconLeft from '../../assets/shared/icon-arrow-left.svg';
import './BtnGoBack.scss';

const BtnGoBack = () => {
  return (
    <div>
      <img src={iconLeft} alt="icon-left" className="icon-left" />
      <NavLink className="btn-go-back" to="/">
        Go Back
      </NavLink>
    </div>
  );
};

export default BtnGoBack;
