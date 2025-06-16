import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { Curso } from './entities/curso.entity';
import { Grado } from '../grado/entities/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso, Grado])],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
