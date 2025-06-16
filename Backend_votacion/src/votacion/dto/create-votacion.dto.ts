import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateVotacionDto {
  @IsNotEmpty()
  @IsInt()
  id_candidato: number;

  @IsNotEmpty()
  @IsInt()
  id_usuario: number;
}
