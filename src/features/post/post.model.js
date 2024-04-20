export default class PostsModel {
  constructor(
    id,
    userId,
    caption,
    imageUrl,
  ) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.likes = [];
    this.comments = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.isDraft = false;
    this.isArchived = false;
  }

 // here to get All Posts
 static getAllPosts() {
    return posts;
  }

  // here is get Post By Id
  static getPostById(id) {
    return posts.find(post => post.id === id);
  }

  // here create Post
  static createPost(postData) {
    const newPost = new PostsModel(
        posts.length + 1,
        postData.userId,
        postData.caption,
        postData.imageUrl
      );
      posts.push(newPost);
      return newPost;
  }

  // here is to update post
  static updatePost(id, updatedData) {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...updatedData };
      posts[index].updatedAt = new Date();
      return posts[index];
    }
    return null;
  }

  // here delete a post
  static deletePost(id) {
    posts = posts.filter(post => post.id !== id);
  }

  // Additional tasks:
  // 1)add a future to allows user to filter post based on the post caption 
  static filterPostsByCaption(caption) {
    return posts.filter(post => post.caption.includes(caption));
  }

  // 2)add a future to save a post as a draft and to archive a post 
  static savePostAsDraft(id) {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
      posts[index].isDraft = true;
      return posts[index];
    }
    return null;
  }

  static archivePost(id) {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
      posts[index].isArchived = true;
      return posts[index];
    }
    return null;
  }

  // 3)implement sorting of post based on user engagement and date 
  static sortPostsByEngagement() {
    return posts.sort((a, b) => (a.likes.length + a.comments.length) - (b.likes.length + b.comments.length));
  }

  static sortPostsByDate() {
    return posts.sort((a, b) => b.createdAt - a.createdAt);
  }

  // 4)add a future to bookmark post 
  static addBookmark(postId, userId) {
    const post = posts.find(post => post.id === postId);
    if (post) {
      if (!post.bookmarks.includes(userId)) {
        post.bookmarks.push(userId);
      }
      return post;
    }
    return null;
  }

  static removeBookmark(postId, userId) {
    const post = posts.find(post => post.id === postId);
    if (post) {
      post.bookmarks = post.bookmarks.filter(uid => uid !== userId);
      return post;
    }
    return null;
  }

  static getBookmarkedPosts(userId) {
    return posts.filter(post => post.bookmarks.includes(userId));
  }

  // 5) implement pagination for posts and comments
  static paginatePosts(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return posts.slice(startIndex, endIndex);
  }

  static paginateComments(postId, pageNumber, pageSize) {
    const post = posts.find(post => post.id === postId);
    if (post) {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return post.comments.slice(startIndex, endIndex);
    }
    return null;
  }

}

var posts = [
  new PostsModel(
    1,
    1,
    'Description for post',
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  ),
  new PostsModel(
    2,
    2,
    'Description for post',
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  )
];
