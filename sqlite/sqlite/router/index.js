// Express Router / sqlite3 Database

module.exports = (db, table) => require('express').Router()

  .post("/", function(req, res, next) {
    const cols = Object.keys(req.body.data);
    const vals = cols.map(()=>'?').join();
    const sql = `INSERT INTO ${table} (${cols}) VALUES (${vals})`;
    const params = Object.values(req.body.data);
    function fn(err, result) {
      if (err) {
        res.status(400).json({ "error": err.message })
        return;
      }
      const sql = `SELECT * FROM ${table} where id = ?`;
      const params = [this.lastID];
      function fn(err, result) {
        if (err) {          
          return res.status(400).json({ "error": err.message });;
        }
        res.status(201).json({data: result});
      }
      db.get(sql, params, fn);
    }
    db.run(sql, params, fn);
  })

  .get("/", function(req, res, next) {
    const sql = `SELECT * FROM ${table}`;
    const params = [];
    function fn(err, result) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.status(200).json({data: result});
    }
    db.all(sql, params, fn);
  })

  .get("/:id", function(req, res, next) {
    const sql = `SELECT * FROM ${table} where id = ?`;
    const params = [req.params.id];
    function fn(err, result) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.status(200).json({data: result});
    }
    db.get(sql, params, fn);
  })

  .put("/:id", (req, res, next) => {   
    const str = Object.keys(req.body.data).join(' = ?, ') + ' = ? ';
    const sql = `UPDATE ${table} SET ${str} WHERE id = ?`;
    const params = [...Object.values(req.body.data), req.params.id];
    function fn(err, result) {
      if (err) {
        res.status(400).json({ "error": err.message })
        return;
      }
      const sql = `SELECT * FROM ${table} where id = ?`;
      const params = [req.params.id];
      function fn(err, result) {
        if (err) {
          res.status(400).json({ "error": err.message });
          return;
        }
        res.status(200).json({data: result});
      }
      db.get(sql, params, fn);
    }
    db.run(sql, params, fn);
  })

  .delete("/:id", (req, res, next) => {
    const sql = `DELETE FROM ${table} WHERE id = ?`;
    const params = req.params.id;
    function fn(err, result) {
      if (err) {
        res.status(400).json({ "error": res.message });
        return;
      }
      res.status(200).json({ "deleted": this.changes, "id": req.params.id });
    }
    db.run(sql, params, fn);  
  })
