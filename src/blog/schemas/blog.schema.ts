/* directory will house all the database schema that will be required by your application 
This definition specifies that all fields will store and only accept string values. 
With this in place, the datatype of data that will be stored in the database will be properly controlled
*/

import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  author: String,
  date_posted: String,
});