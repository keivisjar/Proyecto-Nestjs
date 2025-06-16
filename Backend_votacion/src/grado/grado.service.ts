import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grado } from './entities/grado.entity';
import { CreateGradoDto } from './dto/create-grado.dto';

@Injectable()
export class GradoService {
  constructor(
    @InjectRepository(Grado)
    private readonly gradoRepository: Repository<Grado>,
  ) {}

  async create(dto: CreateGradoDto) {
    const existe = await this.gradoRepository.findOneBy({ descripcion: dto.descripcion });
    if (existe) {
      throw new BadRequestException('Ya existe un grado con esa descripción');
    }
    const nuevo = this.gradoRepository.create(dto);
    return this.gradoRepository.save(nuevo);
  }

  findAll() {
    return this.gradoRepository.find();
  }

  async findOne(id: number) {
    const grado = await this.gradoRepository.findOneBy({ id_grado: id });
    if (!grado) {
      throw new NotFoundException(`Grado con ID ${id} no encontrado`);
    }
    return grado;
  }

  async update(id: number, dto: CreateGradoDto) {
    const grado = await this.findOne(id);
    grado.descripcion = dto.descripcion;
    return this.gradoRepository.save(grado);
  }

  async remove(id: number) {
    const grado = await this.findOne(id);
    return this.gradoRepository.remove(grado);
  }
}
