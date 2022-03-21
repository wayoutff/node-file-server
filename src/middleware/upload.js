import util from 'util'
import multer from 'multer'
import config from '../../config.js'

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + config.PATH_TO_UPLOADS)
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    cb(null, file.originalname)
  },
})

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: config.MAX_SIZE },
}).single("file")

let uploadFileMiddleware = util.promisify(uploadFile)
export default uploadFileMiddleware
