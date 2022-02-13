import { useRef, useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import BtnGoBack from '../components/UI-UX/BtnGoBack';
import iconPlus from '../assets/shared/icon-new-feedback.svg';
import '../scss/NewFeedPage.scss';

const NewFeedPage = () => {
  const titleInputRef = useRef();
  const selectedInputRef = useRef();
  const descriptionInputRef = useRef();

  const [enteredDescription, setEnteredDescription] = useState('');

  const descriptionHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const isDescriptionEntered = enteredDescription.trim().length > 0;

  return (
    <div className="new-feed-page">
      <div className="row-line">
        <BtnGoBack />
      </div>

      <form action="submit">
        <img className="icon-plus" src={iconPlus} alt="icon-plus" />
        <h1>Create New Feedback</h1>

        <h2>Feedback Title</h2>
        <h3>Add a short, descriptive headline</h3>
        <textarea
          cols="30"
          rows="10"
          className="input"
          ref={titleInputRef}
        ></textarea>

        <h2>Category</h2>
        <h3>Choose a category for your feedback</h3>

        <select
          className="category-input"
          name="category"
          ref={selectedInputRef}
        >
          <option className="option" value="Feature">
            Feature
          </option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>
        </select>

        <h2>Feedback Detail</h2>
        <h3>
          Include any specific comments on what should be improved, added, etc.
        </h3>
        <textarea
          cols="30"
          rows="10"
          ref={descriptionInputRef}
          onChange={descriptionHandler}
        ></textarea>
        {!isDescriptionEntered && <p className="error-msg">Can’t be empty</p>}
        {isDescriptionEntered && (
          <p className="char-left-msg">
            {250 - enteredDescription.length} Characters Left
          </p>
        )}

        <div className="buttons">
          <button className="cancel">
            <NavLink to="/">Cancel</NavLink>
          </button>
          <button className="adding-feedback">
            <NavLink to="/">Add Feedback</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewFeedPage;
