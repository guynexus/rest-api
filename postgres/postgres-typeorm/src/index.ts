'use strict'

import express from 'express';
import cors from 'cors';
// import path from 'path';

import router from './router';

const CORS = {};

const PORT = process.env.PORT || 5000;

const LOG = console.log(`Server running port ${PORT}...`);

( async () => {

  express()

    .use(cors(CORS))

    .use(express.json())

    .use('/api/', router())

    // .use(express.static(path.join(__dirname, 'client')))

    // .get('/*', (req: any, res: any) => 
    //   res.sendFile(path.join(__dirname, 'client', 'index.html'))
    // )

    .listen(PORT, () => LOG );

})()
