/*A data transfer object will help define how data will be 
sent over the network and control how data will be 
posted from the application to the database 

From the code snippet, we have marked each of the individual properties
in the CreatePostDTO class to have a data type of string 
and as read-only to avoid unnecessary mutation
*/

export class CreatePostDTO {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly author: string;
  readonly date_posted: string;
}