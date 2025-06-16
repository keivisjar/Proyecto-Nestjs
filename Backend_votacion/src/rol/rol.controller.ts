import {
  Controller, Get, Post, Body, Param, Delete, Put,
} from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body() dto: CreateRolDto) {
    return this.rolService.create(dto);
  }

  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateRolDto) {
    return this.rolService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }
}
