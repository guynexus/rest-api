'use strict'

import { Router } from 'express';

import route from './route';
import prisma from '../prisma';
import validate from '../validate';

export default Router()

  .use('/customers/', route(prisma.customer, validate))

  .use('/employees/', route(prisma.employee, validate));
