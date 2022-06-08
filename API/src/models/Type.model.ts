import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Git } from './Git.model';

@Entity()
export class TypeDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Git, (git) => git.type)
  @JoinColumn()
  @Column({ nullable: false })
  name: string;
}
