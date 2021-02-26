// Router

module.exports = (Model) => require('express').Router()

  .post('/', async (req, res) => {
    try {
      const data = await Model.create({'id':null, ...req.body.data})
      return res.json({data})
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })

  .get('/', async (req, res) => {
    try {
      const data = await Model.findAll()
      return res.json({data})
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const data = await Model.findOne({where: { id }})
      return res.json({data})
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  .put('/:id', async (req, res) => {
    const id = req.params.id
    const { first_name, last_name, profession, code, color, city, branch, assigned, Status } = req.body.data;
    try {
      const data = await Model.findOne({ where: { id } })
      console.log(data)
      data.first_name = first_name || data.first_name;
      data.last_name = last_name || data.last_name;
      data.profession = profession || data.profession;
      data.code = code || data.code;
      data.color = color || data.color;
      data.city = city || data.city;
      data.branch = branch || data.branch;
      data.assigned = assigned;
      await data.save()
      return res.json({data})
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  .delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
      const data = await Model.findOne({ where: { id } })
      await data.destroy()
      return res.json({ message: 'Record deleted' })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
