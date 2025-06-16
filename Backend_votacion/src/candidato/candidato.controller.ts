import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';

@Controller('candidatos')
export class CandidatoController {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Post()
  create(@Body() dto: CreateCandidatoDto) {
    return this.candidatoService.create(dto);
  }

  @Get()
  findAll() {
    return this.candidatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidatoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCandidatoDto) {
    return this.candidatoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatoService.remove(+id);
  }
}
