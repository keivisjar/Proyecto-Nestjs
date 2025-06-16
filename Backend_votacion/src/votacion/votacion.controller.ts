import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VotacionService } from './votacion.service';
import { CreateVotacionDto } from './dto/create-votacion.dto';

@Controller('votaciones')
export class VotacionController {
  constructor(private readonly votacionService: VotacionService) {}

  @Post()
  create(@Body() dto: CreateVotacionDto) {
    return this.votacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.votacionService.findAll();
  }
  @Get('conteo')
getConteo() {
  return this.votacionService.conteoPorCandidato();
}


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votacionService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votacionService.remove(+id);
  }
}
