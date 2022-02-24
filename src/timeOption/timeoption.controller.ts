import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TimeOptionService } from './timeoption.service';

@Controller("time-options")
export class TimeOptionController { 

    constructor(private timeOptionService: TimeOptionService){}

    @Get()
    async getTimeOption(){
        return this.timeOptionService.listTimeOption();
    }

    @Post()
    async create(
        @Body('day') day:number,
        @Body('time') time: string,
    ){
        return this.timeOptionService.createTimeOption({
            day,
            time,
        })
    }
}
