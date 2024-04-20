// here imported required model
import CommentModel from './comment.model.js';

const CommentController = {
    // getCommentsByPostId
  getCommentsByPostId: (req, res) => {
    const postId = parseInt(req.params.postId);
    const comments = CommentModel.getCommentsByPostId(postId);
    res.json(comments);
  },
  // createComment
  createComment: (req, res) => {
    const commentData = req.body;
    const newComment = CommentModel.createComment(commentData);
    res.status(201).json(newComment);
  },
  // updateComment
  updateComment: (req, res) => {
    const commentId = parseInt(req.params.commentId);
    const updatedData = req.body;
    const updatedComment = CommentModel.updateComment(commentId, updatedData);
    if (updatedComment) {
      res.json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  },
  // deleteComment
  deleteComment: (req, res) => {
    const commentId = parseInt(req.params.commentId);
    CommentModel.deleteComment(commentId);
    res.status(204).end();
  }
};

export default CommentController;
