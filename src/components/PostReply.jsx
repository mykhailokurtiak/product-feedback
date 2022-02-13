import './PostReply.scss';
import { useRef, useState, useContext, useEffect } from 'react';

import { postReplyToComment } from '../hooks/utils';

const PostReply = ({ commentId }) => {
  const [enteredReply, setEnteredReply] = useState(null);
  const replyInputRef = useRef();

  const inputHandler = (e) => {
    if (replyInputRef.current.value.trim(' ').length === 0) return;
    setEnteredReply(replyInputRef.current.value);
  };
  console.log(commentId);

  postReplyToComment(enteredReply, commentId);

  return (
    <div className="add-reply">
      <textarea ref={replyInputRef} name="comment"></textarea>
      <button onClick={inputHandler} type="submit">
        Post Reply
      </button>
    </div>
  );
};

export default PostReply;
