import { Table, Model, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript'

export default interface User {
  id: number;
  name: string;
  phone: number;
  password: string;
  isAdmin : boolean;
  creationDate: Date;
  updatedOn: Date;
}

@Table 
export default class User extends Model{
  @Column
  name!: string;

  @Column
  phone!: number;

  @Column
  password!: string;

  @Column
  role!: string;

  @CreatedAt
  @Column
  creationDate!: Date;

  @UpdatedAt
  @Column
  updatedOn!: Date;

}
