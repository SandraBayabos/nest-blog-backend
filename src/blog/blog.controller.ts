import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

/*
Controllers in Nest.js are meant to receive incoming HTTP requests 
from an application frontend and return an appropriate response. 
This will ensure that the controller is not bloated as 
most of the business logic has been abstracted to a service


To have access to all the functions declared within the BlogService earlier, 
we injected it into the controller via a constructor. 
This is a pattern regarded as dependency injection used in Nest.js to 
increase efficiency and enhance the modularity of the application.


*/


@Controller('blog')
export class BlogController {

  constructor(private blogService: BlogService) {}

  // Submit a post
  @Post('/post')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been submitted successfully!',
      post: newPost
    });
  }

  // Fetch a particular post using ID
  @Get('/post/:postID')
  async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
    const post = await this.blogService.getPost(postID);
    if (!post) {
      throw new NotFoundException('Post does not exist!');
    }
    return res.status(HttpStatus.OK).json(post);
  }

  // Fetch all posts
  @Get('posts')
  async getPosts(@Res() res) {
    const posts = await this.blogService.getPosts();
    return res.status(HttpStatus.OK).json(posts)
  }
}
