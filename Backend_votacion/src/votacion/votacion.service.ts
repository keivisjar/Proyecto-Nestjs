import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Votacion } from './entities/votacion.entity';
import { CreateVotacionDto } from './dto/create-votacion.dto';
import { UpdateVotacionDto } from './dto/update-votacion.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Candidato } from '../candidato/entities/candidato.entity';


@Injectable()
export class VotacionService {
  constructor(
    @InjectRepository(Votacion)
    private votacionRepo: Repository<Votacion>,

    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,

    @InjectRepository(Candidato)
    private candidatoRepo: Repository<Candidato>,
  ) {}

  async create(dto: CreateVotacionDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id_usuario: dto.id_usuario });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const candidato = await this.candidatoRepo.findOneBy({ id_candidato: dto.id_candidato });
    if (!candidato) throw new NotFoundException('Candidato no encontrado');

    const yaVoto = await this.votacionRepo.findOneBy({ usuario: { id_usuario: dto.id_usuario } });
    if (yaVoto) throw new BadRequestException('Este usuario ya ha votado');

    const voto = this.votacionRepo.create({
      usuario,
      candidato,
      fecha_hora: new Date(),
    });

    return this.votacionRepo.save(voto);
  }

  findAll() {
    return this.votacionRepo.find();
  }

  async findOne(id: number) {
    const voto = await this.votacionRepo.findOneBy({ id_votacion: id });
    if (!voto) throw new NotFoundException('Voto no encontrado');
    return voto;
  }

  async remove(id: number) {
    const voto = await this.findOne(id);
    return this.votacionRepo.remove(voto);
  }
  async conteoPorCandidato() {
  return this.votacionRepo
    .createQueryBuilder('votacion')
    .select('candidato.id_candidato', 'id_candidato')
    .addSelect('candidato.no_tarjeton', 'no_tarjeton')
    .addSelect('usuario.nombre', 'nombre')
    .addSelect('usuario.apellido', 'apellido')
    .addSelect('tipo.descripcion', 'tipo_candidatura')
    .addSelect('COUNT(*)', 'total_votos')
    .innerJoin('votacion.candidato', 'candidato')
    .innerJoin('candidato.usuario', 'usuario')
    .innerJoin('candidato.tipoCandidatura', 'tipo')
    .groupBy('candidato.id_candidato')
    .addGroupBy('usuario.nombre')
    .addGroupBy('usuario.apellido')
    .addGroupBy('candidato.no_tarjeton')
    .addGroupBy('tipo.descripcion')
    .orderBy('total_votos', 'DESC')
    .getRawMany();
}


  // Omitimos update por ser voto final
}
