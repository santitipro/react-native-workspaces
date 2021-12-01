import { Events } from "./events";

export interface IDomainEvent {
  eventName: Events;
  toPrimitive(): Object;
}

export abstract class DomainEvent implements IDomainEvent {
  readonly id: string;
  readonly eventName: Events;
  readonly ocurredOn: Date;

  constructor(eventName: Events) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.eventName = eventName;
    this.ocurredOn = new Date();
  }

  abstract toPrimitive(): Object;
}

export type CallbackEvent<T extends IDomainEvent> = (event: T) => void;
