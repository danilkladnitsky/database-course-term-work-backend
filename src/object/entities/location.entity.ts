import { Army } from 'src/army/entities/army.entity';
import { BaseEntity } from 'src/common/base-entity.entity';
import { History } from 'src/history/entities/history.entity';
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
import { Fort } from './fort.entity';

@Entity()
export class Location extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @OneToOne((type) => Fort)
  @JoinColumn()
  fort: Fort;

  @OneToMany(() => History, (history) => history.id)
  history: History;
}
