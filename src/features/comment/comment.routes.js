
// here imported required model
import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();

commentRouter.get('/:postId', CommentController.getCommentsByPostId);
commentRouter.post('/', CommentController.createComment);
commentRouter.put('/:commentId', CommentController.updateComment);
commentRouter.delete('/:commentId', CommentController.deleteComment);

export default commentRouter;
