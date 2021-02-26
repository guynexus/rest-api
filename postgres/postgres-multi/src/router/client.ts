'use strict'
import prisma from '../prisma';
import typeorm from '../typeorm';

function Client(client:any) {
  return {
    findFirst(arg:any): any {return client.findFirst(arg)},
    findMany(arg:any) :any {return client.findMany(arg)},
    create(arg:any): any {return client.create(arg)},
    update(arg:any): any {return client.update(arg)},
    delete(arg:any): any {return client.delete(arg)},
  }
}

function ORMClient(client:any) {

  return {

    findFirst(arg:any):any{return client.findOneOrFail(arg)},

    findMany():any{return client.find()},

    create(arg:any):any{
      const data = client.create(arg.data).save();      
      return data
    },

    update(arg:any):any{      
      const data = client.findOneOrFail({ where: { id: arg.where.id } });
      Object.assign(data, arg.data);
      data.save();
      return data
    },

    delete(arg:any):any{
      const data = client.findOneOrFail(arg);
      data.remove();      
      return client.delete(arg)},

  }
  
}
export default { customer: ORMClient(typeorm.customer), employee: ORMClient(typeorm.employee) }



// export default { customer: Client(prisma.customer), employee: Client(prisma.employee) }

