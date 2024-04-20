// Import necessary modules
import express from 'express';
import swagger from 'swagger-ui-express';
import bodyParser from 'body-parser';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import postRouter from './src/features/post/post.routes.js';
import commentRouter from './src/features/comment/comment.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import apiDocs from './swagger.json' assert {type: 'json'};
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import { ApplicationError } from './src/features/error-handler/applicationError.js';

// Initialize Express server
const server = express();

// Middleware
server.use(bodyParser.json());
server.use("/api-docs", 
swagger.serve, 
swagger.setup(apiDocs)
);
server.use(loggerMiddleware);

// Routes
server.use('/api/users', userRouter);
server.use('/api/posts', jwtAuth, postRouter);
server.use('/api/comments', jwtAuth,commentRouter);
server.use('/api/likes', jwtAuth,likeRouter);


//  Default request handler
server.get('/', (req, res) => {
    res.send('Welcome to Ecommerce APIs');
  });
  
  // Error handler middleware
  server.use((err, req, res, next)=>{
    console.log(err);
    if (err instanceof ApplicationError){
      res.status(err.code).send(err.message);
    }
  
    // server errors.
    res
    .status(500)
    .send(
      'Something went wrong, please try later'
      );
  });
  
  //  Middleware to handle 404 requests.
  server.use((req, res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:3200/api-docs")
  });

// Start the server
const PORT = process.env.PORT || 9090;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
