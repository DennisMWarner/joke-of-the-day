import { dbContext } from "../db/DbContext";
import { UnAuthorized } from "../utils/Errors";


class UsersService {
  async getAll(names = []) {
    let data = await dbContext.Users.find() //go to the Users endpoint and find all the objects.
    return data
  }

  async getById(id) {
    let name = await dbContext.Users.findById(id) //go to the Users endpoint and find the object with this id.
    return name
  }

  async create(body) {
    let data = await dbContext.Users.create(body) //create a new db object using this pojo(body)
    return data
  }

  async edit(id, body) {
    let data = await dbContext.Users.findByIdAndUpdate(id, body) //go to db, find the object with this id, and update it with this pojo(body) information
    return data
  }

  async delete(id) {
    let data = await dbContext.Users.findByIdAndRemove(id) //go to the db, find this object with this id, and delete it.
    return data
  }
}

export const usersService = new UsersService()