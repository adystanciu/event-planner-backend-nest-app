import { Injectable, Inject } from '@nestjs/common';
import { Event } from '../entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from 'src/repository/event.repository';

@Injectable()
export class EventService {
  constructor( @InjectRepository(EventRepository) private eventRepository: EventRepository) {
  }
  
  async save(event: Event): Promise<Event | undefined> {
    const result = await this.eventRepository.save(event);
    return result;
  }

  async findAll(): Promise<Event[] | undefined> {
    const result = await this.eventRepository.find();
    return result;
  }
}