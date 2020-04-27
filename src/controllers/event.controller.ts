import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from '../services/event.services';
import { EventDTO } from 'src/dtos/event.dto';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Post('/event')
  save(@Body() eventDTO: EventDTO) {
    return this.eventService.save(EventDTO.toDomain(eventDTO));
  };

  @Get('/event')
  findAll() {
    return this.eventService.findAll();
  }
}
