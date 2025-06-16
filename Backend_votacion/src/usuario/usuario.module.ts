import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { Rol } from '../rol/entities/rol.entity';
import { Curso } from '../curso/entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol, Curso])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
