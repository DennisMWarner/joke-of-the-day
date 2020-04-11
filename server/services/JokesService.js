import { dbContext } from "../db/DbContext";


class JokesService {
  async getAll() {
    let data = await dbContext.Jokes.find() //go to the Jokes endpoint and find all the objects.
    return data
  }

  async getId(id) {
    let data = await dbContext.Jokes.findById(id) //go to the Jokes endpoint and find the object with this id.
    return data
  }

  async create(body) {
    let data = await dbContext.Jokes.create(body) //create a new db object using this pojo(body)
    return data
  }

  async edit(id, body) {
    let data = await dbContext.Jokes.findByIdAndUpdate(id, body) //go to db, find the object with this id, and update it with this pojo(body) information
    return data
  }

  async delete(id) {
    let data = await dbContext.Jokes.findByIdAndRemove(id) //go to the db, find this object with this id, and delete it.
    return data
  }
}

export const jokesService = new JokesService()