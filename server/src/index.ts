import 'dotenv/config';
import http from 'http';

import wsConfigure from './socket';
import { wsVerification } from './index.helpers';

const PORT = 3000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); //
  res.end('Hello!\nThe server is running healthy!'); //
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`); //
});

wsConfigure(PORT + 1, wsVerification);
