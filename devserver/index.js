import express from 'express';
import path from 'path';
import index from './page/index.js';

const server = express();
const router = express.Router();

const route = { page: { index: '/' } };

const routers = () => {
  router.get(route.page.index, index());
  return router;
};

server.use(express.static('public'));
server.use(express.static(path.resolve('./dist'))); // exprss.static() to server static file
server.use(routers());
server.use((req, res, next) => {
  console.log('req.url:', req.url);
  next();
});
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`[server] server started listening at http://localhost:${port}`);
});
