import { BaseEntity } from 'src/common/base-entity.entity';
import { Hero } from 'src/hero/entity/hero.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Artifact extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  power: number;
}
