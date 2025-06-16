import { IsNotEmpty, IsString, MaxLength, IsInt } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  nomeclatura: string;

  @IsNotEmpty()
  @IsInt()
  id_grado: number;
}
