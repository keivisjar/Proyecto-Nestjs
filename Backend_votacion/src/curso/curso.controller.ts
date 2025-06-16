import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() dto: CreateCursoDto) {
    return this.cursoService.create(dto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCursoDto) {
    return this.cursoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}
