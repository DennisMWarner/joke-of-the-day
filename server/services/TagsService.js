import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TagsService {
  async edit(tagId, body) {
    let tag = await dbContext.Tag.findByIdAndUpdate(tagId, body, { new: true })
    return tag
  }
  async remove(tagId) {
    let tag = await dbContext.Tag.findByIdAndDelete(tagId)
    return tag
  }
  async create(body) {
    let tag = await dbContext.Tag.create(body)
    return tag
  }
  async getAll(query = {}) {
    let tags = await dbContext.Tag.find(query);
    return tags;
  }
  async getById(id) {
    let tag = await dbContext.Tag.findById(id);
    if (!tag) {
      throw new BadRequest("Invalid Id");
    }
    return tag;
  }
}

export const tagsService = new TagsService();