import { Table, Model, Column, CreatedAt, UpdatedAt } from 'sequelize-typescript'

export default interface Art {
  id?: number;
  artist: string;
  picture: string;
  description: string;
  creationDate?: Date;
  updatedOn?: Date;
}

@Table 
export default class Art extends Model{
  @Column
  artist!: string;

  @Column
  picture!: string;

  @Column
  description!: string;

  @CreatedAt
  @Column
  creationDate?: Date;

  @UpdatedAt
  @Column
  updatedOn?: Date;

}
