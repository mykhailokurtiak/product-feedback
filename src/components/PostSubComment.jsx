import { useState, useContext } from 'react';
import './PostSubComment.scss';
import PostReplySubComment from './PostReplySubComment';
import FeatureCtx from '../hooks/DataCtx';

const PostSubComment = ({ replyEl }) => {
  const [enterSubComment, setEnterSubComment] = useState(false);
  const replyHandler = () => {
    setEnterSubComment(!enterSubComment);
  };
  const { reply } = useContext(FeatureCtx);
  console.log(reply);

  console.log(replyEl);

  return (
    <div className="comment comment-sub">
      <img src={replyEl.user.image} alt="user-image" className="user-image" />
      <div className="comment-box">
        <div className="details">
          <div>
            <h2 className="user-name">{replyEl.user.name}</h2>
            <h3 className="user-username">@{replyEl.user.username}</h3>
          </div>
          <div className="reply" onClick={replyHandler}>
            Reply
          </div>
        </div>

        <div className="comment-content">
          <span className="replying-to">@{replyEl.replyingTo} </span>
          <span className="comment-details">{replyEl.content}</span>
        </div>
        {enterSubComment && (
          <PostReplySubComment replyTo={replyEl.user.username} />
        )}
      </div>
    </div>
  );
};

export default PostSubComment;
