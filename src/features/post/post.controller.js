// imported required model
import PostModel from './post.model.js';

const PostController = {
  // getAllPosts 
  getAllPosts: (req, res) => {
    const allPosts = PostModel.getAllPosts();
    res.json(allPosts);
  },
  // getPostById
  getPostById: (req, res) => {
    const postId = parseInt(req.params.id);
    const post = PostModel.getPostById(postId);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  },
  // createPost
  createPost: (req, res) => {
    const postData = req.body;
    const newPost = PostModel.createPost(postData);
    res.status(201).json(newPost);
  },
  // updatePost
  updatePost: (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedData = req.body;
    const updatedPost = PostModel.updatePost(postId, updatedData);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  },
  // deletePost
  deletePost: (req, res) => {
    const postId = parseInt(req.params.id);
    PostModel.deletePost(postId);
    res.status(204).end();
  },
  // filterPostsByCaption
  filterPostsByCaption: (req, res) => {
    const caption = req.query.caption;
    const filteredPosts = PostModel.filterPostsByCaption(caption);
    res.json(filteredPosts);
  },
  // savePostAsDraft
  savePostAsDraft: (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPost = PostModel.savePostAsDraft(postId);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  },
  // archivePost
  archivePost: (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPost = PostModel.archivePost(postId);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  },
  // sortPostsByEngagement
  sortPostsByEngagement: (req, res) => {
    const sortedPosts = PostModel.sortPostsByEngagement();
    res.json(sortedPosts);
  },
  // sortPostsByDate
  sortPostsByDate: (req, res) => {
    const sortedPosts = PostModel.sortPostsByDate();
    res.json(sortedPosts);
  },
  // addBookmark
  addBookmark: (req, res) => {
    const postId = parseInt(req.params.id);
    const userId = req.body.userId;
    const updatedPost = PostModel.addBookmark(postId, userId);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  },
  // removeBookmark
  removeBookmark: (req, res) => {
    const postId = parseInt(req.params.id);
    const userId = req.body.userId;
    const updatedPost = PostModel.removeBookmark(postId, userId);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  },
  // getBookmarkedPosts
  getBookmarkedPosts: (req, res) => {
    const userId = parseInt(req.params.userId);
    const bookmarkedPosts = PostModel.getBookmarkedPosts(userId);
    res.json(bookmarkedPosts);
  },
  // paginatePosts
  paginatePosts: (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber);
    const pageSize = parseInt(req.query.pageSize);
    const paginatedPosts = PostModel.paginatePosts(pageNumber, pageSize);
    res.json(paginatedPosts);
  },
  // paginateComments
  paginateComments: (req, res) => {
    const postId = parseInt(req.params.id);
    const pageNumber = parseInt(req.query.pageNumber);
    const pageSize = parseInt(req.query.pageSize);
    const paginatedComments = PostModel.paginateComments(postId, pageNumber, pageSize);
    res.json(paginatedComments);
  }
};

export default PostController;
