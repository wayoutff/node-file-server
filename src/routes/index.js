import express from 'express'
import controller from '../controller/file.controller.js'

/**
 * Create instance of router
 */
const router = express.Router()

function routes (app) {
  router.post("/upload", controller.upload)
  router.get("/files", controller.getListFiles)
  router.get("/files/:name", controller.download)

  app.use('/api', router)
}

export default routes
