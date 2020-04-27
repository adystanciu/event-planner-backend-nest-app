import { Event } from "src/entities/event.entity";

export class EventDTO {

    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    url: string;
    location: string;

    static toDomain(evDto: EventDTO): Event {
        let ev: Event = new Event();
        
        ev.description = evDto.description;
        ev.title = evDto.title;
        ev.location = evDto.location;
        ev.url = evDto.url;
        ev.startDate = evDto.startDate;
        ev.endDate = evDto.endDate;

        return ev;
    }
}
