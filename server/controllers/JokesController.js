import express from 'express'
import BaseController from "../utils/BaseController";
import { jokesService } from "../services/JokesService";
import { BadRequest } from "../utils/Errors";


export class JokesController extends BaseController {
  constructor() {
    super("api/jokes")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      //authorization would go here, everything below this point in the router would require authorization to do.
      .post('', this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await jokesService.getAll() //run this function in the service, get them all for me.
      res.send({ data: data, message: "This is where the jokes live, get you one!" })
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await jokesService.getById(req.params.id) //strip id off the parameters and send it to the service.
      res.send({ data: data, message: "here it is" })
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await jokesService.create(req.body) //pojo from front end = body, send it to the service.
      res.send({ data: data, message: "Joke created!" })
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await jokesService.edit(req.params.id, req.body) //get the id from the requests parameters, and send the edit pojo to service.
      res.send({ data: data, message: "Joke editted!" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await jokesService.delete(req.params.id) //get the id from the requests parameters, and send that information to the service.
      res.send({ data: data, message: "Joke deleted!" })
    } catch (error) {
      next(error)
    }
  }

}
