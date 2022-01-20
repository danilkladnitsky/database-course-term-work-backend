import {
  BaseEntity as TypeormBaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export class BaseEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  thumbnail: string;
}
