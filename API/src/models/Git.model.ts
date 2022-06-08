import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { TypeDetail } from './Type.model';
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

  @ManyToOne(() => TypeDetail, (typeDetail) => typeDetail.id)
  @JoinColumn()
  type: TypeDetail;
}
