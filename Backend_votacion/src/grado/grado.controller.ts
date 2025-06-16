import {
  Controller, Get, Post, Body, Param, Delete, Put,
} from '@nestjs/common';
import { GradoService } from './grado.service';
import { CreateGradoDto } from './dto/create-grado.dto';

@Controller('grados')
export class GradoController {
  constructor(private readonly gradoService: GradoService) {}

  @Post()
  create(@Body() dto: CreateGradoDto) {
    return this.gradoService.create(dto);
  }

  @Get()
  findAll() {
    return this.gradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gradoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateGradoDto) {
    return this.gradoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gradoService.remove(+id);
  }
}
