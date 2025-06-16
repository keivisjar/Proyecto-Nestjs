import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  contrasena: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  apellido: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  documento_identidad: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  correo_electronico: string;

  @IsNotEmpty()
  @IsInt()
  id_rol: number;

  @IsNotEmpty()
  @IsInt()
  id_curso: number;
}
