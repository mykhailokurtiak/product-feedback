import { useContext } from 'react';
import FeatureCtx from '../hooks/DataCtx';

export function roadmapFeatureSorter(feature, productRequests) {
  if (feature === 'all') {
    productRequests = JSON.parse(localStorage.getItem('productRequests'));
  }
  if (feature === 'ui') {
    const result = productRequests.filter((sug) => sug.category === 'ui');
    productRequests = result;
  }
  if (feature === 'ux') {
    const result = productRequests.filter((sug) => sug.category === 'ux');
    productRequests = result;
  }
  if (feature === 'enhancement') {
    const result = productRequests.filter(
      (sug) => sug.category === 'enhancement'
    );
    productRequests = result;
  }
  if (feature === 'bug') {
    const result = productRequests.filter((sug) => sug.category === 'bug');
    productRequests = result;
  }
  if (feature === 'feature') {
    const result = productRequests.filter((sug) => sug.category === 'feature');
    productRequests = result;
  }

  return productRequests;
}

export function sortByFilter(sortedBy, productRequests) {
  // let productRequests = JSON.parse(localStorage.getItem('productRequests'));

  if (sortedBy === 'most-upvotes') {
    productRequests.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
  }

  if (sortedBy === 'least-upvotes') {
    productRequests.sort((a, b) => {
      return a.upvotes - b.upvotes;
    });
  }

  if (sortedBy === 'most-comments') {
    const result = productRequests
      .filter((sug) => sug.comments)
      .sort((a, b) => b.comments.length - a.comments.length);

    result.push(...productRequests.filter((sug) => sug.comments === undefined));

    productRequests = result;
  }

  if (sortedBy === 'least-comments') {
    const result = productRequests
      .filter((sug) => sug.comments)
      .sort((a, b) => a.comments.length - b.comments.length);

    result.unshift(
      ...productRequests.filter((sug) => sug.comments === undefined)
    );

    productRequests = result;
  }

  return productRequests;
}

export function postReplyToComment(enteredReply, commentId) {
  const { currentSug, reply, setReply } = useContext(FeatureCtx);
  const productRequest = currentSug;
  const currentProdReqId = productRequest.id;
  if (enteredReply === null) return;

  const allProductRequests = JSON.parse(
    localStorage.getItem('productRequests')
  );
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const indexReq = allProductRequests.findIndex(
    (el) => el.id === currentProdReqId
  );

  const indexComment = productRequest.comments.findIndex(
    (el) => el.id === commentId
  );

  if (productRequest.comments[indexComment].replies) {
    productRequest.comments[indexComment].replies.push({
      content: enteredReply,
      replyingTo: productRequest.comments[indexComment].user.username,
      user: currentUser,
    });
    setReply({ id: commentId, reply: false });
  }

  if (!productRequest.comments[indexComment].replies) {
    productRequest.comments[indexComment].replies = [];
    productRequest.comments[indexComment].replies.push({
      content: enteredReply,
      replyingTo: productRequest.comments[indexComment].user.username,
      user: currentUser,
    });
    setReply({ id: commentId, reply: !reply });
  }

  allProductRequests[indexReq] = productRequest;
  console.log('📣', allProductRequests);

  localStorage.setItem('productRequests', JSON.stringify(allProductRequests));
}

export function postReplyToSubComment(enteredReply, commentId, replyTo) {
  const { currentSug, reply, setReply } = useContext(FeatureCtx);
  const productRequest = currentSug;
  const currentProdReqId = productRequest.id;
  if (enteredReply === null) return;

  const allProductRequests = JSON.parse(
    localStorage.getItem('productRequests')
  );
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const indexReq = allProductRequests.findIndex(
    (el) => el.id === currentProdReqId
  );

  const indexComment = productRequest.comments.findIndex(
    (el) => el.id === commentId
  );

  console.log(commentId);
  console.log(indexComment);
  console.log(productRequest);

  if (productRequest.comments[indexComment].replies) {
    productRequest.comments[indexComment].replies = [];
    productRequest.comments[indexComment].replies.push({
      content: enteredReply,
      replyingTo: productRequest.comments[indexComment].user.username,
      user: currentUser,
    });
    setReply({ id: commentId, reply: !reply });
  }

  if (productRequest.comments[indexComment].replies) {
    productRequest.comments[indexComment].replies.push({
      content: enteredReply,
      replyingTo: productRequest.comments[indexComment].user.username,
      user: currentUser,
    });
    setReply({ id: commentId, reply: false });
  }

  allProductRequests[indexReq] = productRequest;
  console.log('📣', allProductRequests);

  localStorage.setItem('productRequests', JSON.stringify(allProductRequests));
}
