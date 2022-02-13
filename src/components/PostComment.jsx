import './PostComment.scss';

const PostComment = () => {
  return (
    <form className="add-comment">
      <h1>Add Comment</h1>
      <textarea name="" cols="30" rows="10"></textarea>
      <h2>250 Characters left</h2>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default PostComment;
