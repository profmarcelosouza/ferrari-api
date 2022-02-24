import { Injectable } from '@nestjs/common';
import { CreatePaymentSituationDto } from './dto/create-payment-situation.dto';
import { UpdatePaymentSituationDto } from './dto/update-payment-situation.dto';

@Injectable()
export class PaymentSituationsService {
  create(createPaymentSituationDto: CreatePaymentSituationDto) {
    return 'This action adds a new paymentSituation';
  }

  findAll() {
    return `This action returns all paymentSituations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentSituation`;
  }

  update(id: number, updatePaymentSituationDto: UpdatePaymentSituationDto) {
    return `This action updates a #${id} paymentSituation`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentSituation`;
  }
}
