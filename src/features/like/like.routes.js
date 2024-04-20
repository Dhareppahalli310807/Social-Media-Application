import express from "express";
import LikeController from "./like.controller.js";

const likeRouter = express.Router();

likeRouter.get("/:postId", LikeController.getAllLikes);
likeRouter.get("/toggle/:postId", LikeController.toggleLike);

export default likeRouter;
