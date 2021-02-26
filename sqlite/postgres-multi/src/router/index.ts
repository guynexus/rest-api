'use strict'

import { Router } from 'express';

import route from './route';
import prisma from '../prisma';
import validate from '../validate';
import client from './client';

 export default Router()

  .use('/customers/', route(prisma.customer, validate))

  .use('/employees/', route(prisma.employee, validate))

  .use('/client/', route(client.employee, validate));