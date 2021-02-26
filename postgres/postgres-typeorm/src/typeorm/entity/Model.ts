'use strict'

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export default abstract class Model extends BaseEntity {

  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }

  @PrimaryGeneratedColumn()
  id: Number;

  // @Column({ type: 'uuid' })
  // uuid: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toJSON() {
    return { ...this};//, id: undefined };
  }

}
