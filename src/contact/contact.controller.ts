/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {

    constructor(private contatcService: ContactService){}

    @Get(':id')
    async show(@Param('id') id){
        return this.contatcService.get(Number(id));
    }

    @Get()
    async list(){
        return this.contatcService.list();
    }

    @Post()
    async create(
        @Body('name') name,
        @Body('email') email,
        @Body('message') message
    ){
        return this.contatcService.create({
            message,
            name,
            email,
        })
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        return this.contatcService.delete(Number(id));
    }
}


