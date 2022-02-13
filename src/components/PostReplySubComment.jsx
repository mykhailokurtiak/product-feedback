import './PostReplySubComment.scss';
import { useRef, useState, useContext } from 'react';
import FeatureCtx from '../hooks/DataCtx';

import { postReplyToSubComment } from '../hooks/utils';

const PostReplySubComment = ({ replyTo, commentId }) => {
  const [enteredReply, setEnteredReply] = useState();
  const replyInputRef = useRef();

  const { reply } = useContext(FeatureCtx);
  console.log(reply);

  const inputHandler = (e) => {
    if (replyInputRef.current.value.trim(' ').length === 0) return;
    setEnteredReply(replyInputRef.current.value);
  };

  postReplyToSubComment(enteredReply, commentId, replyTo);

  return (
    <div className="add-reply">
      <textarea ref={replyInputRef} name="comment"></textarea>
      <button onClick={inputHandler} type="submit">
        Post Reply
      </button>
    </div>
  );
};

export default PostReplySubComment;
