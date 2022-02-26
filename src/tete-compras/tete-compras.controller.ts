import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeteComprasService } from './tete-compras.service';
import { CreateTeteCompraDto } from './dto/create-tete-compra.dto';
import { UpdateTeteCompraDto } from './dto/update-tete-compra.dto';

@Controller('tete-compras')
export class TeteComprasController {
  constructor(private readonly teteComprasService: TeteComprasService) {}

  @Post()
  async create(@Body() createTeteCompraDto: CreateTeteCompraDto) {
    return this.teteComprasService.create(createTeteCompraDto);
  }

  @Get()
  async findAll() {
    return this.teteComprasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.teteComprasService.findOne(+id);
  }

  @Get('por-id/:idComprador')
  async getCompras(@Param('idComprador') idComprador: number){
    return this.teteComprasService.findByTesteId(idComprador);
  }

  @Get('total-compras/:idComprador')
  async getValorTotalComprasByComprador(@Param('idComprador') idComprador: number){
    return this.teteComprasService.getValorTotalComprador(idComprador);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeteCompraDto: UpdateTeteCompraDto) {
    return this.teteComprasService.update(+id, updateTeteCompraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.teteComprasService.remove(+id);
  }
}
