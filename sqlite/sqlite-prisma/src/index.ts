'use strict'

import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';

import Router from './router';

const { PORT, LOG, CORS, CLIENT_DIR, CLIENT_HTML } = CONFIG();

( async () => express()

  .use(cors(CORS))

  .use(express.json())

  .use('/api/', Router)

  .use(CLIENT_DIR)

  .get('/*', CLIENT_HTML)

  .listen(PORT, () => LOG )

)();

function CONFIG(): any {
  return {
    PORT: process.env.PORT || 5000,
    LOG: console.log(`Server running port ${process.env.PORT || 5000}...`),    
    CORS: {},    
    CLIENT_DIR: express.static(path.join(__dirname, 'client')),    
    CLIENT_HTML(req: Request, res: Response, next: NextFunction): void {
      res.sendFile(path.join(__dirname, 'client', 'index.html'));
      next();
    }
  }
}
