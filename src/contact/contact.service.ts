import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {

    constructor(private prismaService: PrismaService) {}

    async get(id: number){

        id = Number(id);

        if(isNaN(id)){
            throw new BadRequestException("Id is invalid");
        }

        const contatc = await this.prismaService.contacts.findUnique({
            where: {
                id,
            }
        });

        if(!contatc){
            throw new NotFoundException('Id not found');
        }

        return contatc;
    }

    async create({
        name,
        email,
        message
    }: {
        name: string,
        email: string,
        message: string
    }) {
        if (!name) {
            throw new BadRequestException('O nome é obrigatório');
        }

        if (!email) {
            throw new BadRequestException('O e-mail é obrigatório');
        }

        if (!message) {
            throw new BadRequestException('A mensagem é obrigatória');
        }

        let personId: number;
        const user = await this.prismaService.user.findUnique({
            where: {
                email,
            },
            select: {
                personId: true,
            }
        });

        if (user) {
            personId = Number(user.personId);
        } else {
            
            const person = await this.prismaService.contacts.findFirst({
                where: {
                    email,
                }
            })

            if (person) {
                console.log({person})
                personId = person.personId;
            } else {
                console.log("entrou no else")
                const newPerson = await this.prismaService.person.create({
                    data: {
                        name,
                    }
                });

                personId = Number(newPerson.id);
            }            
        }

        return this.prismaService.contacts.create({
            data: {
                email,
                message,
                personId,
            },
        });
    }

    async list(){
        return this.prismaService.contacts.findMany();
    }

    async delete(id: number){

        id = Number(id);

        if(isNaN(id)){
            throw new BadRequestException('Invalid ID');
        }


        if(!await this.get(id)){
            throw new NotFoundException('ID not exists');
        }

        return this.prismaService.contacts.delete({
            where: {
                id,
            }
        });
    }
}
