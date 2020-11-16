import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema'

/*
This module uses the MongooseModule.forFeature() method 
to define which models should be registered in the module. 
Without this, injecting the PostModel within the BlogService 
using @injectModel() decorator wouldn’t work
*/

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema}])
  ],
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule {}
