import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';

@Injectable()
export class TesteService {

  constructor(private prismaService: PrismaService){}

  validId(id: number){

    id = Number(id);
    if(isNaN(id)){
      throw new BadRequestException('ID inválido');
    }

    return id;
  }

  create(data: CreateTesteDto) {

    return this.prismaService.teste.create({
      data:{
        nome: data.nome,
        profissao: data.profissao,
        idade: Number(data.idade),
        telefone: data.telefone,
      }
    });
  }

  findAll() {
    return this.prismaService.teste.findMany();
  }

  findOne(id: number) {
    return this.prismaService.teste.findUnique({
      where:{
        id: this.validId(id),
      }
    });
  }

  update(id: number, updateTesteDto: UpdateTesteDto) {
    return `This action updates a #${id} teste`;
  }

  remove(id: number) {
    return this.prismaService.teste.delete({
      where:{
        id: this.validId(id),
      }
    });
  }
}
