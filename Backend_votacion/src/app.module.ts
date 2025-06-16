import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RolModule } from './rol/rol.module';
import { GradoModule } from './grado/grado.module';
import { TipoCandidaturaModule } from './tipo-candidatura/tipo-candidatura.module';
import { CursoModule } from './curso/curso.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CandidatoModule } from './candidato/candidato.module';
import { VotacionModule } from './votacion/votacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
       username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, 
    }),
    RolModule,
    GradoModule,
    TipoCandidaturaModule,
    CursoModule,
    UsuarioModule,
    CandidatoModule,
    VotacionModule,
  ],
})
export class AppModule {}
