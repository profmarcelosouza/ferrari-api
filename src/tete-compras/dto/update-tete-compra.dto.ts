import { PartialType } from '@nestjs/mapped-types';
import { CreateTeteCompraDto } from './create-tete-compra.dto';

export class UpdateTeteCompraDto extends PartialType(CreateTeteCompraDto) {}
