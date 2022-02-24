import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TimeOptionService { 
    constructor(private prismaService: PrismaService){}

    async listTimeOption(){
        return this.prismaService.timeOption.findMany();
    }

    async createTimeOption({
        day,
        time,
    }: {
        day: number;
        time: string;
    }){
        day = Number(day);
        
        if(isNaN(day) || day < 0 || day > 6){
            throw new BadRequestException('Day is qequired');
        }

        
        if(!time){
            throw new BadRequestException('Time is qequired');
        }

        const splittedTime = time.split(':');

        if(splittedTime.length !== 2){
            throw new BadRequestException('Invalid time');
        }

        const hours = Number(splittedTime[0]);
        const minutes = Number(splittedTime[1]);

        if(isNaN(hours) || hours < 0 || hours > 59){
            throw new BadRequestException('Invalid time');
        }

        if(isNaN(minutes) || minutes < 0 || minutes > 23){
            throw new BadRequestException('Invalid time');
        }

        let timeDate = new Date();
        timeDate.setHours(hours, minutes);

        return this.prismaService.timeOption.create({
            data: {
                day,
                time: timeDate,
            },
        });


    }
}
