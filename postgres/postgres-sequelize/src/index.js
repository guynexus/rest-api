'use strict';

const { CORS, PORT, LOG } = CONFIG();

( async () => require('express')()

  .use(require('express').json())

  .use(require('cors')(CORS))

  .use('/api', require('./router'))

  .listen(PORT, LOG)

)();

function CONFIG() {
  return {
    PORT: process.env.PORT || 5000,
    LOG: () => console.log(`Server running port ${process.env.PORT || 5000}...`),    
    CORS: {},    
    CLIENT_DIR: require('express').static(require('path').join(__dirname, 'client')),    
    CLIENT_HTML(req, res, next){
      res.sendFile(require('path').join(__dirname, 'client', 'index.html'));
      next();
    }
  }
}
  