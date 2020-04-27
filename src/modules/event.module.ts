import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepository } from 'src/repository/event.repository';
import { EventController } from 'src/controllers/event.controller';
import { EventService } from 'src/services/event.services';

@Module({
  imports: [TypeOrmModule.forFeature([ EventRepository])],
  controllers: [EventController],
  providers: [EventService],

  exports: [EventService]


})
export class EventModule {}