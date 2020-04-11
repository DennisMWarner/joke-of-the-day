import { dbContext } from "../db/DbContext";
import { UnAuthorized } from "../utils/Errors";


class UserService {
  async getUsers(names = []) {
    let names = await dbContext.User.find() //go to the Users endpoint and find all the objects.
    return names
  }

  async getUser(name) {
    let name = await dbContext.User.findUser(names: user.name) //go to the Users endpoint and find the object with this id.
    return name
  }

  async create(body) {
    let data = await dbContext.User.create(body) //create a new db object using this pojo(body)
    return data
  }

  async edit(id, body) {
    let data = await dbContext.User.findByIdAndUpdate(id, body) //go to db, find the object with this id, and update it with this pojo(body) information
    return data
  }

  async delete(id) {
    let data = await dbContext.User.findByIdAndRemove(id) //go to the db, find this object with this id, and delete it.
    return data
  }
}

export const usersService = new UserService()