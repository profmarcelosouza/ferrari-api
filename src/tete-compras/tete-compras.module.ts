import { Module } from '@nestjs/common';
import { TeteComprasService } from './tete-compras.service';
import { TeteComprasController } from './tete-compras.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TeteComprasController],
  providers: [TeteComprasService]
})
export class TeteComprasModule {}
