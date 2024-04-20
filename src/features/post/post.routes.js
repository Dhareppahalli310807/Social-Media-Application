// postRoutes.js

import express from 'express';
import PostController from '../post/post.controller.js';

const postRouter = express.Router();

// Routes for post management
postRouter.get('/all', PostController.getAllPosts);
postRouter.get('/:id', PostController.getPostById);
postRouter.post('/', PostController.createPost);
postRouter.put('/:id', PostController.updatePost);
postRouter.delete('/:id', PostController.deletePost);
postRouter.get('/filter', PostController.filterPostsByCaption);
postRouter.put('/:id/draft', PostController.savePostAsDraft);
postRouter.put('/:id/archive', PostController.archivePost);
postRouter.get('/sort/engagement', PostController.sortPostsByEngagement);
postRouter.get('/sort/date', PostController.sortPostsByDate);
postRouter.post('/:id/bookmark', PostController.addBookmark);
postRouter.delete('/:id/bookmark', PostController.removeBookmark);
postRouter.get('/bookmarked/:userId', PostController.getBookmarkedPosts);
postRouter.get('/paginate', PostController.paginatePosts);
postRouter.get('/:id/comments/paginate', PostController.paginateComments);

export default postRouter;
