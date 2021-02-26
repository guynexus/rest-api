
import { createConnection, getConnectionOptions } from 'typeorm';

import employee from './entity/Employee';
import customer from './entity/Customer';

( async () => {

  const config = await getConnectionOptions('postgres');

  try { 
    
    await createConnection({...config, name: 'default'}); 
  
  }

  catch (err) { console.log(err); }
  
})();

export default { employee, customer };
