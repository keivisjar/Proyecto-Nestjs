import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidatoService } from './candidato.service';
import { CandidatoController } from './candidato.controller';
import { Candidato } from './entities/candidato.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { TipoCandidatura } from '../tipo-candidatura/entities/tipo-candidatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidato, Usuario, TipoCandidatura])],
  controllers: [CandidatoController],
  providers: [CandidatoService],
})
export class CandidatoModule {}
