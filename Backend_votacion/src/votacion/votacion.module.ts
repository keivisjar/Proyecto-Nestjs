import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotacionService } from './votacion.service';
import { VotacionController } from './votacion.controller';
import { Votacion } from './entities/votacion.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Candidato } from '../candidato/entities/candidato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Votacion, Usuario, Candidato])],
  controllers: [VotacionController],
  providers: [VotacionService],
})
export class VotacionModule {}
