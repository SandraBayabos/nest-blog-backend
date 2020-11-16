import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interfaces';
import { CreatePostDTO } from './dto/create-post.dto'


/*
this file holds all the logic for this application and then communicate 
with the MongoDB database by adding and retrieving data from it
*/

@Injectable()
export class BlogService {


  /*
  Inject the Post model into this BlogService class. 
  With that, you will now be able to use this injected model to retrieve all posts, 
  fetch a single post, and carry out other database-related activities.
  */

  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await this.postModel(createPostDTO)
    return newPost.save();
  }

  async getPost(postID): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();
    return post;
  }

  async getPosts(): Promise<Post []> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel
    .findByIdAndUpdate(postID, createPostDTO, {new: true});
    return editedPost;
  }

  async deletePost(postID): Promise<any> {
    const deletedPost = await this.postModel
    .findByIdAndRemove(postID);
    return deletedPost;
  }
}
