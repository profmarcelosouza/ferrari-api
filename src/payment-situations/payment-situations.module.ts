import { Module } from '@nestjs/common';
import { PaymentSituationsService } from './payment-situations.service';
import { PaymentSituationsController } from './payment-situations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [PaymentSituationsController],
  providers: [PaymentSituationsService]
})
export class PaymentSituationsModule {}
