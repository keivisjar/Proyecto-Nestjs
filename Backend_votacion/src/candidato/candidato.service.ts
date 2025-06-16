import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidato } from './entities/candidato.entity';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { TipoCandidatura } from '../tipo-candidatura/entities/tipo-candidatura.entity';

@Injectable()
export class CandidatoService {
  constructor(
    @InjectRepository(Candidato)
    private readonly candidatoRepo: Repository<Candidato>,

    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,

    @InjectRepository(TipoCandidatura)
    private readonly tipoCandidaturaRepo: Repository<TipoCandidatura>,
  ) {}

  async create(dto: CreateCandidatoDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id_usuario: dto.id_usuario });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const tipo = await this.tipoCandidaturaRepo.findOneBy({ id_candidatura: dto.id_tipo_candidatura });
    if (!tipo) throw new NotFoundException('Tipo de candidatura no encontrado');

    const yaPostulado = await this.candidatoRepo.findOneBy({ usuario: { id_usuario: dto.id_usuario } });
    if (yaPostulado) throw new BadRequestException('Este usuario ya está postulado');

    const candidato = this.candidatoRepo.create({
      no_tarjeton: dto.no_tarjeton,
      usuario,
      tipoCandidatura: tipo,
    });

    return this.candidatoRepo.save(candidato);
  }

  findAll() {
    return this.candidatoRepo.find();
  }

  async findOne(id: number) {
    const candidato = await this.candidatoRepo.findOneBy({ id_candidato: id });
    if (!candidato) throw new NotFoundException('Candidato no encontrado');
    return candidato;
  }

  async update(id: number, dto: UpdateCandidatoDto) {
    const candidato = await this.findOne(id);

    if (dto.id_usuario) {
      const usuario = await this.usuarioRepo.findOneBy({ id_usuario: dto.id_usuario });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      candidato.usuario = usuario;
    }

    if (dto.id_tipo_candidatura) {
      const tipo = await this.tipoCandidaturaRepo.findOneBy({ id_candidatura: dto.id_tipo_candidatura });
      if (!tipo) throw new NotFoundException('Tipo de candidatura no encontrado');
      candidato.tipoCandidatura = tipo;
    }

    if (dto.no_tarjeton !== undefined) {
      candidato.no_tarjeton = dto.no_tarjeton;
    }

    return this.candidatoRepo.save(candidato);
  }

  async remove(id: number) {
    const candidato = await this.findOne(id);
    return this.candidatoRepo.remove(candidato);
  }
}
