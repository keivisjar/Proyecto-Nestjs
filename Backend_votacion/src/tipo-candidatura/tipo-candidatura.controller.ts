import {
  Controller, Get, Post, Body, Param, Delete, Put,
} from '@nestjs/common';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';

@Controller('tipo-candidatura')
export class TipoCandidaturaController {
  constructor(private readonly service: TipoCandidaturaService) {}

  @Post()
  create(@Body() dto: CreateTipoCandidaturaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateTipoCandidaturaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
