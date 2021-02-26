// Router

module.exports = (client) => require('express').Router()

  .post('/', async (req, res) => {
    try {
      const data = await client.create({'id':null, ...req.body.data});
      return res.status(201).json({data});
    } catch (err) {;
      console.log(err);
      return res.status(500).json(err);
    }
  })

  .get('/', async (req, res) => {
    try {
      const data = await client.all();
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  })

  .get('/:id', async (req, res) => {
    try {
      const data = await client.findOne({ where: {id:req.params.id} });
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  })

  .put('/:id', async (req, res) => {
    try {
      const data = await client.findOne({ where: {id:req.params.id} });
      Object.assign(data, req.body.data);
      await data.save();
      return res.json({data});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  })

  .delete('/:id', async (req, res) => {
    try {
      const data = await client.findOne({ where: {id:req.params.id} });
      await data.destroy();
      return res.json({ message: 'Record deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  });
