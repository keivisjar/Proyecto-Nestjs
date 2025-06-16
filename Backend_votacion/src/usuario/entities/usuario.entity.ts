import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from '../../rol/entities/rol.entity';
import { Curso } from '../../curso/entities/curso.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 20 })
  contrasena: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 10 })
  documento_identidad: string;

  @Column({ length: 50 })
  correo_electronico: string;

  @ManyToOne(() => Rol, { eager: true })
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @ManyToOne(() => Curso, { eager: true })
  @JoinColumn({ name: 'id_curso' })
  curso: Curso;
}
