import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Rol } from '../rol/entities/rol.entity';
import { Curso } from '../curso/entities/curso.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,

    @InjectRepository(Rol)
    private rolRepo: Repository<Rol>,

    @InjectRepository(Curso)
    private cursoRepo: Repository<Curso>,
  ) {}

  async create(dto: CreateUsuarioDto) {
    const rol = await this.rolRepo.findOneBy({ id_rol: dto.id_rol });
    if (!rol) throw new NotFoundException('Rol no encontrado');

    const curso = await this.cursoRepo.findOneBy({ id_curso: dto.id_curso });
    if (!curso) throw new NotFoundException('Curso no encontrado');

    const usuario = this.usuarioRepo.create({
      ...dto,
      rol,
      curso,
    });

    return this.usuarioRepo.save(usuario);
  }

  findAll() {
    return this.usuarioRepo.find();
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepo.findOneBy({ id_usuario: id });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return usuario;
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);

    if (dto.id_rol) {
      const rol = await this.rolRepo.findOneBy({ id_rol: dto.id_rol });
      if (!rol) throw new NotFoundException('Rol no encontrado');
      usuario.rol = rol;
    }

    if (dto.id_curso) {
      const curso = await this.cursoRepo.findOneBy({ id_curso: dto.id_curso });
      if (!curso) throw new NotFoundException('Curso no encontrado');
      usuario.curso = curso;
    }

    usuario.nombre = dto.nombre ?? usuario.nombre;
    usuario.apellido = dto.apellido ?? usuario.apellido;
    usuario.contrasena = dto.contrasena ?? usuario.contrasena;
    usuario.correo_electronico = dto.correo_electronico ?? usuario.correo_electronico;
    usuario.documento_identidad = dto.documento_identidad ?? usuario.documento_identidad;

    return this.usuarioRepo.save(usuario);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuarioRepo.remove(usuario);
  }
}
