import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Git {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  command: string;

  @Column('text')
  description: string;

  @Column('simple-array')
  categories: string[];

  @Column('int')
  views: number;
}
