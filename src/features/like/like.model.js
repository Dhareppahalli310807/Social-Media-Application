export default class LikeModel {
    constructor(id, userId, postId) {
      this.id = id;
      this.userId = userId;
      this.postId = postId;
    }
  }
  
  let likes = [];
  
  export { likes };
  