import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ length: 100 })
  descripcion: string;
}
