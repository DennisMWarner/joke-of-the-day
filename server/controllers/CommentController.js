
import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { commentService } from "../services/CommentService.js";
import { BadRequest } from "../utils/Errors";

export class commentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      .get("/:commentId", this.getById)
      .put('/:commentId"', this.edit)
      .post("", this.create)
      .delete("/:commentId", this.remove)
  }

  async edit(req, res, next) {
    try {
      let comment = commentService.edit(req.params.commentId, req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      let comment = commentService.remove(req.params.commentId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let comments = commentService.getAll()
      res.send(comments)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let comment = commentService.getById(req.params.commentId)
      if (!comment) {
        throw new BadRequest("Invalid comment Id")
      }
      res.send(comment)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let comment = commentService.create(req.body)
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
}