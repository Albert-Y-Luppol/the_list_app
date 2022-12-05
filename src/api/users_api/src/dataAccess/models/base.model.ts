import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ default: () => 'NOW()' })
  public createdAt: Date;

  @Column()
  public updatedAt?: Date;

  @Column()
  public deletedAt?: Date;
}
