import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTipoCandidaturaDto {
  @IsNotEmpty({ message: 'La descripción no puede estar vacía' })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @MaxLength(100, { message: 'La descripción no puede tener más de 100 caracteres' })
  descripcion: string;
}
