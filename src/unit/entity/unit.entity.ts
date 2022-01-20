import { Army } from 'src/army/entities/army.entity';
import { BaseEntity } from 'src/common/base-entity.entity';
import { Fraction } from 'src/fraction/entities/fraction.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Unit extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  power: string;

  @Column({ nullable: false, default: 0 })
  count: number;

  @ManyToOne(() => Fraction, (fraction) => fraction.units)
  fraction: Fraction;
}
