import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalController } from './local.controller';
import { LocalService } from './local.service';
import { Local, LocalSchema } from './local.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Local.name, schema: LocalSchema }])],
  controllers: [LocalController],
  providers: [LocalService],
})
export class LocalModule {}