import { Army } from 'src/army/entities/army.entity';
import { BaseEntity } from 'src/common/base-entity.entity';
import { Fraction } from 'src/fraction/entities/fraction.entity';
import { Location } from 'src/object/entities/location.entity';
import { Ability } from 'src/perk/entities/ability.entity';
import { Artifact } from 'src/perk/entities/artifact.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class History extends BaseEntity {
  @ManyToOne(() => Fraction, (fraction) => fraction.id)
  fraction1: Fraction;
  @ManyToOne(() => Fraction, (fraction) => fraction.id)
  fraction2: Fraction;

  @ManyToOne(() => Army, (army) => army.id)
  army1: Army;

  @ManyToOne(() => Army, (army) => army.id)
  army2: Army;

  @ManyToOne(() => Location, (location) => location.id)
  location: Location;
}
