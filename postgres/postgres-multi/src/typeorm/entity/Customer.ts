'use strict'

import { Length } from 'class-validator';
import { Entity, Column } from 'typeorm';

import Model from './Model';

@Entity('customers')
export default class Customer extends Model {
  
  @Column()
  @Length(1, 255)
  first_name: String

  @Column()
  @Length(1, 255)
  last_name: String

  @Column()
  @Length(1, 255)
  profession: String

  @Column()
  @Length(1, 255)
  code: String

  @Column()
  @Length(1, 255)
  color: String

  @Column()
  @Length(1, 255)
  city: String

  @Column()
  @Length(1, 255)
  branch: String

  @Column()
  assigned: boolean
  
}