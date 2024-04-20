export default class CommentModel {
  constructor(id, userId, postId, content) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }

  static getAllComments() {
    return comments;
  }

  static getCommentsByPostId(postId) {
    return comments.filter(comment => comment.postId === postId);
  }

  static createComment(commentData) {
    const newComment = new CommentModel(
      comments.length + 1,
      commentData.userId,
      commentData.postId,
      commentData.content
    );
    comments.push(newComment);
    return newComment;
  }

  static updateComment(commentId, updatedData) {
    const index = comments.findIndex(comment => comment.id === commentId);
    if (index !== -1) {
      comments[index] = { ...comments[index], ...updatedData };
      return comments[index];
    }
    return null;
  }

  static deleteComment(commentId) {
    comments = comments.filter(comment => comment.id !== commentId);
  }
}

var comments = [
    new CommentModel(
      1,
      1,
      1,
      "This is a great post!"
    ),
    new CommentModel(
      2,
      2,
      1,
      "Nice job, keep it up!"
    ),
  ];
  