import { BaseEntity } from 'src/common/base-entity.entity';
import { Fraction } from 'src/fraction/entities/fraction.entity';
import { Hero } from 'src/hero/entity/hero.entity';
import { History } from 'src/history/entities/history.entity';
import { Unit } from 'src/unit/entity/unit.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Army extends BaseEntity {
  @ManyToOne(() => Fraction, (fraction) => fraction.armies)
  fraction: Fraction;

  @Column({ nullable: false })
  score: number;

  @Column({ nullable: false })
  unitsCount: number;
}
