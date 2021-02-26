// Express Server / sqlite3 Database

const db = require('./sqlite');

require('express')()
  .use(require('express').json())
  .use(require('cors')())
  .use("/api/employees/", require('./router')(db, 'employees'))
  .use("/api/customers/", require('./router')(db, 'customers'))
  .listen(8080, () => console.log('Job Dispatch API running on port 8080!'));
