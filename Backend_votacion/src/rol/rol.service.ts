import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  create(dto: CreateRolDto) {
    const nuevoRol = this.rolRepository.create(dto);
    return this.rolRepository.save(nuevoRol);
  }

  findAll() {
    return this.rolRepository.find();
  }

  findOne(id: number) {
    return this.rolRepository.findOneBy({ id_rol: id });
  }

  async update(id: number, dto: CreateRolDto) {
    await this.rolRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
  const rol = await this.findOne(id);
  if (!rol) {
    throw new Error(`Rol con ID ${id} no encontrado`);
  }
  return this.rolRepository.remove(rol);
}

}
