import { Army } from 'src/army/entities/army.entity';
import { BaseEntity } from 'src/common/base-entity.entity';
import { Fraction } from 'src/fraction/entities/fraction.entity';
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
export class Hero extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  power: number;

  @Column({ nullable: false, default: false })
  disabled: boolean;

  @ManyToOne((type) => Fraction, (fraction) => fraction.heroes)
  fraction: Fraction;

  @OneToOne((type) => Ability)
  @JoinColumn()
  ability: Ability | null;

  @OneToOne((type) => Artifact)
  @JoinColumn()
  artifact: Artifact | null;
}
