import { TimeOptionService } from './timeOption/timeoption.service';
import { TimeOptionController } from './timeOption/timeoption.controller';
import { TimeOptionModule } from './timeOption/timeoption.module';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceModule } from './service/service.module';
import { PaymentSituationsModule } from './payment-situations/payment-situations.module';
import { AddressModule } from './address/address.module';
import { TesteModule } from './teste/teste.module';
import { TeteComprasModule } from './tete-compras/tete-compras.module';

@Module({
  imports: [
    TimeOptionModule,
    ContactModule,
    MailModule,
    AuthModule,
    UserModule,
    PrismaModule,
    ServiceModule,
    PaymentSituationsModule,
    AddressModule,
    TesteModule,
    TeteComprasModule,
  ],
  controllers: [
    TimeOptionController, AppController],
  providers: [
    TimeOptionService,],
})
export class AppModule { }
