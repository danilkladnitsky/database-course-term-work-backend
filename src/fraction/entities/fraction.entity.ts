import { Army } from 'src/army/entities/army.entity';
import { BaseEntity } from 'src/common/base-entity.entity';
import { Hero } from 'src/hero/entity/hero.entity';
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
export class Fraction extends BaseEntity {
  @Column({ nullable: false }) name: string;

  @OneToMany(() => Army, (army) => army.fraction)
  armies: Army[];

  @OneToMany((ype) => Hero, (hero) => hero.fraction)
  heroes: Hero[];

  @OneToMany(() => Unit, (unit) => unit.fraction)
  units: Unit[];
}
