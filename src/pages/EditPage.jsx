import '../scss/EditPage.scss';
import BtnGoBack from '../components/UI-UX/BtnGoBack';
import iconEdit from '../assets/shared/icon-edit-feedback.svg';
import { NavLink } from 'react-router-dom';

const EditPage = () => {
  return (
    <div className="edit-page">
      <div className="row-line">
        <BtnGoBack />
      </div>
      <form action="submit">
        <img className="icon-edit" src={iconEdit} alt="icon-edit" />

        <h1 id="feedback-title">Editing ‘Add a dark theme option’</h1>

        <h2>Feedback Title</h2>
        <h3>Add a short, descriptive headline</h3>
        <textarea
          className="input"
          placeholder=""
          id="feedbackTitleInput"
        ></textarea>

        <h2>Category</h2>
        <h3>Choose a category for your feedback</h3>

        <select className="category-input" name="category">
          <option className="option" value="Feature">
            Feature
          </option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>
        </select>

        <h2>Update Status</h2>
        <h3>Change feedback state</h3>

        <select className="category-input" name="status">
          <option className="option" value="Suggestion">
            Suggestion
          </option>
          <option value="Planned">Planned</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Live">Live</option>
        </select>

        <h2>Feedback Detail</h2>
        <h3>
          Include any specific comments on what should be improved, added, etc.
        </h3>
        <textarea name=""></textarea>
        <p class="error-msg">Can’t be empty</p>

        <div class="buttons">
          <button className="delete">
            <NavLink to="/">Delete</NavLink>
          </button>
          <button className="cancel">
            <NavLink to="/">Cancel</NavLink>
          </button>
          <button className="adding-feedback">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
