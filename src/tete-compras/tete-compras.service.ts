import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeteCompraDto } from './dto/create-tete-compra.dto';
import { UpdateTeteCompraDto } from './dto/update-tete-compra.dto';

@Injectable()
export class TeteComprasService {
  
  constructor(private prismaService: PrismaService){}

  validId(id: number){
    id = Number(id);
    if(isNaN(id)){
      throw new BadRequestException("ID is invalid");
    }

    return id;
  }


  async create(data: CreateTeteCompraDto) {
    return this.prismaService.testeCompra.create({
      data:{
        data: new Date(data.data),
        descricao: data.descricao,
        valor: data.valor,
        testeId: Number(data.testeId),
      }
    });
  }

  async findAll() {
    return this.prismaService.testeCompra.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.testeCompra.findUnique({
      where:{
        id: this.validId(id,)
      }
    });
  }

  async findByTesteId(testeId: number){
    testeId = this.validId(testeId);
    return this.prismaService.testeCompra.findMany({
      where:{
        testeId,
      }
    })
  }

  async getValorTotalComprador(idComprador: number) {
    let valores;
    valores = await this.findByTesteId(idComprador);
    let valortotal = 0;
    for(let i = 0; i < valores.length; i++){
      valortotal= valortotal + Number(valores[i].valor);
      
    }
    return valortotal;
  }

  async update(id: number, updateTeteCompraDto: UpdateTeteCompraDto) {
    return `This action updates a #${id} teteCompra`;
  }

  async remove(id: number) {
    return this.prismaService.testeCompra.delete({
      where: {
        id: this.validId(id,)
      }
    });;
  }
}
