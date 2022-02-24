import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {

  constructor(private prismaService: PrismaService){}

  async create(data: CreateServiceDto) {
    if(!data.name){
      throw new BadRequestException('Name is required');
    }
    
    if(!data.desciption){
      throw new BadRequestException('Description is required');
    }

    if(!data.price || isNaN(data.price)){
      throw new BadRequestException('Description is required');
    }


    return this.prismaService.sevice.create({
      data:{
        name: data.name,
        description: data.desciption,
        price: data.price,
      }
    });
  }

  async findAll() {
    return this.prismaService.sevice.findMany();
  }

  async findOne(id: number) {
    id = Number(id);

    if(isNaN(id)){
      throw new BadRequestException('ID is invalid');
    }
    return this.prismaService.sevice.findUnique({
      where:{
        id,
      }
    });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  async remove(id: number) {
    id = Number(id);

    if (isNaN(id)) {
      throw new BadRequestException('ID is invalid');
    }

    if(!await this.findOne(id)){
      throw new NotFoundException('ID not found');
    }
    return this.prismaService.sevice.delete({
      where:{
        id,
      }
    });
  }
}
