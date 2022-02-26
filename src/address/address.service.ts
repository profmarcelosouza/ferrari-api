import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prismaService: PrismaService){}

  validId(id: number){
    id = Number(id);
    if(isNaN(id)){
      throw new BadRequestException('ID is invalid');
    }
    return id;
  }

  async create(data: CreateAddressDto) {
    data.personId = this.validId(data.personId)
    return this.prismaService.address.create({
      data,
    });
  }

  async findAll() {
    return this.prismaService.address.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.address.findUnique({
      where:{
        id: this.validId(id),
      }
    });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  async remove(id: number) {
    return this.prismaService.address.delete({
      where:{
        id: this.validId(id),
      }
    });
  }
}
