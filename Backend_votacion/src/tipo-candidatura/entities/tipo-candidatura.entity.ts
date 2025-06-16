import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_candidatura')
export class TipoCandidatura {
  @PrimaryGeneratedColumn()
  id_candidatura: number;

  @Column({ length: 100, unique: true })
  descripcion: string;
}
