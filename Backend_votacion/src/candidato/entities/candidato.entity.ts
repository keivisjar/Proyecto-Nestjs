import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { TipoCandidatura } from '../../tipo-candidatura/entities/tipo-candidatura.entity';

@Entity('candidato')
export class Candidato {
  @PrimaryGeneratedColumn()
  id_candidato: number;

  @Column()
  no_tarjeton: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => TipoCandidatura, { eager: true })
  @JoinColumn({ name: 'id_tipo_candidatura' })
  tipoCandidatura: TipoCandidatura;
}
