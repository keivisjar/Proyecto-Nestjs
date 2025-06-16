import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Candidato } from '../../candidato/entities/candidato.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('votacion')
export class Votacion {
  @PrimaryGeneratedColumn()
  id_votacion: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_hora: Date;

  @ManyToOne(() => Candidato, { eager: true })
  @JoinColumn({ name: 'id_candidato' })
  candidato: Candidato;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
