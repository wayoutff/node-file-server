import express from 'express'
import cors from 'cors'
import routes from './src/routes/index.js'

const PORT = 3000;
const corsOptions = {
  origin: `http://localhost:${PORT}`
};

const app = express();

/**
 * Use cors & urlencoded
 */
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

/**
 * Connect api routes
 */
routes(app);

/**
 * Start a express server
 */
app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
