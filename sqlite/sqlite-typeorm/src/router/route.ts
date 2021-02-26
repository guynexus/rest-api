'use strict'

import { Router, Request, Response } from 'express';

export default (client: any, { rules, check }) => Router()

  .post('/', rules, check, async (req: Request, res: Response) => {
    try {
      const data = await client.create(req.body.data);
      await data.save();
      return res.status(201).json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  })

  .get('/', async (_: Request, res: Response) => {
    try {
      const data = await client.find();
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  })

  .get('/:id', async (req: Request, res: Response) => {
    try {
      const data = await client.findOneOrFail({ where: { id: req.params.id }});
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(404).json({ error: 'Record not found.' });
    }
  })

  .put('/:id', async (req: Request, res: Response) => {
    try {
      const data = await client.findOneOrFail({ where: { id: req.params.id } });
      Object.assign(data, req.body.data);
      await data.save();
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  })

  .delete('/:id', async (req: Request, res: Response) => {
    try {
      const data = await client.findOneOrFail({ where: { id: req.params.id }});
      await data.remove();
      return res.status(204).json({ message: 'Record deleted successfully.' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
  