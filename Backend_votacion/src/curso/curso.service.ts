import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Grado } from '../grado/entities/grado.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso) private cursoRepo: Repository<Curso>,
    @InjectRepository(Grado) private gradoRepo: Repository<Grado>,
  ) {}

  async create(dto: CreateCursoDto) {
    const grado = await this.gradoRepo.findOneBy({ id_grado: dto.id_grado });
    if (!grado) throw new NotFoundException('Grado no encontrado');

    const curso = this.cursoRepo.create({ nomeclatura: dto.nomeclatura, grado });
    return this.cursoRepo.save(curso);
  }

  findAll() {
    return this.cursoRepo.find();
  }

  async findOne(id: number) {
    const curso = await this.cursoRepo.findOneBy({ id_curso: id });
    if (!curso) throw new NotFoundException('Curso no encontrado');
    return curso;
  }

  async update(id: number, dto: UpdateCursoDto) {
    const curso = await this.findOne(id);
    if (dto.id_grado) {
      const grado = await this.gradoRepo.findOneBy({ id_grado: dto.id_grado });
      if (!grado) throw new NotFoundException('Grado no encontrado');
      curso.grado = grado;
    }
    curso.nomeclatura = dto.nomeclatura ?? curso.nomeclatura;
    return this.cursoRepo.save(curso);
  }

  async remove(id: number) {
    const curso = await this.findOne(id);
    return this.cursoRepo.remove(curso);
  }
}
