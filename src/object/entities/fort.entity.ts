import { BaseEntity } from 'src/common/base-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Location } from './location.entity';

@Entity()
export class Fort extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  defenseScore: number;

  @OneToOne((type) => Location)
  @JoinColumn()
  location: Location;
}
