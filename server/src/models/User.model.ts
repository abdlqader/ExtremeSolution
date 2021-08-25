import { Table, Model, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript'

export default interface User {
  id?: number;
  name: string;
  phone: string;
  password: string;
  role : string;
  creationDate?: Date;
  updatedOn?: Date;
}

@Table 
export default class User extends Model{
  @Column
  name!: string;

  @Column
  phone!: string;

  @Column
  password!: string;

  @Column
  role!: string;

  @CreatedAt
  @Column
  creationDate?: Date;

  @UpdatedAt
  @Column
  updatedOn?: Date;

}
