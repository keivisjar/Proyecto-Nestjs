import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('grado')
export class Grado {
  @PrimaryGeneratedColumn()
  id_grado: number;

  @Column({ length: 100, unique: true }) // ✔ Evita duplicados desde la base
  descripcion: string;
}
