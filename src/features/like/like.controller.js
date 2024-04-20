import { likes } from "./like.model.js";

const LikeController = {
  getAllLikes: (req, res) => {
    const postId = parseInt(req.params.postId);
    const postLikes = likes.filter((like) => like.postId === postId);
    res.json(postLikes);
  },

  toggleLike: (req, res) => {
    const postId = parseInt(req.params.postId);
    const userId = req.userId;
    const existingLikeIndex = likes.findIndex(
      (like) => like.postId === postId && like.userId === userId
    );

    if (existingLikeIndex !== -1) {
      likes.splice(existingLikeIndex, 1);
      res.json({ message: "Like removed successfully" });
    } else {
      const newLike = {
        id: likes.length + 1,
        userId: userId,
        postId: postId,
      };
      likes.push(newLike);
      res.json({ message: "Like added successfully" });
    }
  },
};

export default LikeController;
