import { useState, useContext, useEffect, Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeatureCtx from '../hooks/DataCtx';

import BtnEditFeedback from '../components/UI-UX/BtnEditFeedback';
import BtnGoBack from '../components/UI-UX/BtnGoBack';
import '../scss/DetailPage.scss';
import ProductRequest from '../components/ProductRequest';

import PostComment from '../components/PostComment';
import PostReply from '../components/PostReply';
import PostSubComment from '../components/PostSubComment';

const DetailPage = () => {
  const { currentSug, reply, setReply } = useContext(FeatureCtx);

  return (
    <div className="detail-page">
      <div className="header-row">
        <BtnGoBack />
        <BtnEditFeedback />
      </div>
      <ProductRequest productRequest={currentSug} />
      <div className="comments-container">
        <h1>
          {currentSug.hasOwnProperty('comments')
            ? currentSug.comments.length
            : 0}
          <span> </span> Comments
        </h1>

        {currentSug.hasOwnProperty('comments') &&
          currentSug.comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <img
                src={comment.user.image.substring(1)}
                alt="user-image"
                className="user-image"
              />

              <div className="comment-box">
                <div className="details">
                  <div>
                    <h2 className="user-name">{comment.user.name}</h2>
                    <h3 className="user-username">@{comment.user.username}</h3>
                  </div>
                  <div
                    className="reply"
                    reply={reply}
                    onClick={() => {
                      setReply({ id: comment.id, reply: !reply.reply });
                    }}
                  >
                    Reply
                  </div>
                </div>
                <div className="comment-content">{comment.content}</div>
                {comment.id === reply.id && reply.reply ? (
                  <PostReply commentId={comment.id} />
                ) : null}
                <div className="sub-comment">
                  {comment.replies &&
                    comment.replies.map((el) => (
                      <PostSubComment replyEl={el} key={uuidv4()} />
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <PostComment />
    </div>
  );
};

export default DetailPage;
