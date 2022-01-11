const BlogModel = require('../models/blog')

class Blog {
  constructor() {}

  static async getAll(req, res, next) {
    try {
      let response = await BlogModel.find()
      return response
        .status(200)
        .json({ message: 'successfully received data', data: response })
    } catch (err) {
      return response.status(400).json({ message: err.message, error: true })
    }
  }

  static async getById(req, res, next) {
    try {
      let query = { _id: req.params.id }
      let response = await BlogModel.findById(query)
      return response
        .status(200)
        .json({ message: 'successfully received data', data: response })
    } catch (err) {
      return response.status(400).json({ message: err.message, error: true })
    }
  }

  static async create(req, res, next) {
    try {
      let response = await BlogModel.create(req.body)
      return response
        .status(200)
        .json({ message: 'successfully create data', data: response })
    } catch (err) {
      return response.status(400).json({ message: err.message, error: true })
    }
  }

  static async update(req, res, next) {
    try {
      let id = { _id: req.params.id }
      let response = await BlogModel.findByIdAndUpdate(
        { id: id },
        { $set: req.body },
        { new: false }
      )
      return response
        .status(200)
        .json({ message: 'successfully update data', data: response })
    } catch (err) {
      return response.status(400).json({ message: err.message, error: true })
    }
  }

  static async delete(req, res, next) {
    try {
      let id = { _id: req.params.id }
      let response = await BlogModel.findByIdAndDelete(id)
      return response
        .status(200)
        .json({ message: 'successfully delete data', data: response })
    } catch (err) {
      return response.status(400).json({ message: err.message, error: true })
    }
  }
}

module.exports = Blog
