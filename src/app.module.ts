import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

/* 
imported the MongooseModule into the root AppModule 
and then used the forRoot() method to supply the connection to the database. 
Once the editing of the above file is completed, 
you have now successfully set up a database connection for your application 
by using the Mongoose module for MongoDB.
*/

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog-project', { useNewUrlParser: true }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
