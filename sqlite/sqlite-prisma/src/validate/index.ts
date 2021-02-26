import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const result = validationResult.withDefaults({
  formatter: (err) => err.msg
});

const check = (req: Request, res: Response, next: NextFunction) => {
  const errors = result(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.mapped());
  next();
}

const rules = [
  body('data.first_name')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.last_name')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.code')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.profession')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.color')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.city')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.branch')
    .isLength({ min: 1 })
    .withMessage('Name must not be empty'),
  body('data.assigned')
    .isBoolean()
    .withMessage('Value must be boolean')
];

export default {rules, check};

