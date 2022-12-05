import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class Photo extends BaseModel {
  @Column()
  public title: string;

  @Column()
  public s3Path: string;
}
