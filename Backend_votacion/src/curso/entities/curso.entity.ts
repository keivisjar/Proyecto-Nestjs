import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Grado } from '../../grado/entities/grado.entity';

@Entity('curso')
export class Curso {
  @PrimaryGeneratedColumn()
  id_curso: number;

  @Column({ length: 100 })
  nomeclatura: string;

  @ManyToOne(() => Grado, { eager: true })
  @JoinColumn({ name: 'id_grado' })
  grado: Grado;
}
