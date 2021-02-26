// Router

import { Router, Request, Response } from 'express';

export default (client: any, {rules, check}: any) => Router()

  .post('/', rules, check, async (req: Request, res: Response) => {
    try {
      const data = await client.create({data:req.body.data});
      return res.status(201).json({data});
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  })

  .get('/', async (req: Request, res: Response) => {
    try {
      const data = await client.findMany({});
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  })

  .get('/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const data = await client.findFirst({where:{id}})
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(404).json({ message: 'Record not found' });
    }
  })

  .put('/:id', check, async (req: Request, res: Response) => {
      try {
        const id = parseInt(req.params.id);
        const data = await client.update({
          where: { id },
          data: req.body.data
        });
        return res.json({data});
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong' });
      }
    }
  )

  .delete('/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await client.delete({ where: { id } });
      return res.json({ message: 'Record deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
  