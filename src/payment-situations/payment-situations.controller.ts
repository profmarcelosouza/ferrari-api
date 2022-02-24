import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentSituationsService } from './payment-situations.service';
import { CreatePaymentSituationDto } from './dto/create-payment-situation.dto';
import { UpdatePaymentSituationDto } from './dto/update-payment-situation.dto';

@Controller('payment-situations')
export class PaymentSituationsController {
  constructor(private readonly paymentSituationsService: PaymentSituationsService) {}

  @Post()
  create(@Body() createPaymentSituationDto: CreatePaymentSituationDto) {
    return this.paymentSituationsService.create(createPaymentSituationDto);
  }

  @Get()
  findAll() {
    return this.paymentSituationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentSituationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentSituationDto: UpdatePaymentSituationDto) {
    return this.paymentSituationsService.update(+id, updatePaymentSituationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentSituationsService.remove(+id);
  }
}
