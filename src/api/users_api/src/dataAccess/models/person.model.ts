import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class Person extends BaseModel {
  @Column()
  public name: string;

  @Column()
  public familyName: string;

  @Column()
  public email: string;
}
