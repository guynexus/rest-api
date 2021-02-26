'use strict'

import { Router } from 'express';

import typeorm from '../typeorm';
import validate from '../validate';

import route from './route';

export default () => Router()

  .use('/customers/', route(typeorm.customer, validate))

  .use('/employees/', route(typeorm.employee, validate));
