import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async edit(commentId, body) {
    let comment = await dbContext.Comments.findByIdAndUpdate(commentId, body, { new: true })
    return comment
  }
  async remove(commentId) {
    let comment = await dbContext.Comments.findByIdAndDelete(commentId)
    return comment
  }
  async create(body, userId, jokeId) {
    let comment = await dbContext.Comments.create(body)
    return comment
  }
  async getAll(query = {}) {
    let comments = await dbContext.Comments.find(query).populate("tags");
    return comments;
  }
  async getById(id) {
    let comment = await dbContext.Comments.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }
}

export const commentsService = new CommentsService();