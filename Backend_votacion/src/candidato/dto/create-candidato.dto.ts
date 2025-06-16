import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCandidatoDto {
  @IsNotEmpty()
  @IsInt()
  no_tarjeton: number;

  @IsNotEmpty()
  @IsInt()
  id_usuario: number;

  @IsNotEmpty()
  @IsInt()
  id_tipo_candidatura: number;
}
