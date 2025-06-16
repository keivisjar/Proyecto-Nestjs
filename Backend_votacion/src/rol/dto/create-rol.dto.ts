import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  descripcion: string;
}
