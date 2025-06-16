import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCandidatura } from './entities/tipo-candidatura.entity';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';

@Injectable()
export class TipoCandidaturaService {
  constructor(
    @InjectRepository(TipoCandidatura)
    private readonly repo: Repository<TipoCandidatura>,
  ) {}

  async create(dto: CreateTipoCandidaturaDto) {
    const existente = await this.repo.findOneBy({ descripcion: dto.descripcion });
    if (existente) {
      throw new BadRequestException('Ese tipo de candidatura ya existe');
    }
    const nuevo = this.repo.create(dto);
    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const tipo = await this.repo.findOneBy({ id_candidatura: id });
    if (!tipo) {
      throw new NotFoundException(`Tipo de candidatura con ID ${id} no encontrado`);
    }
    return tipo;
  }

  async update(id: number, dto: CreateTipoCandidaturaDto) {
    const tipo = await this.findOne(id);
    tipo.descripcion = dto.descripcion;
    return this.repo.save(tipo);
  }

  async remove(id: number) {
    const tipo = await this.findOne(id);
    return this.repo.remove(tipo);
  }
}
