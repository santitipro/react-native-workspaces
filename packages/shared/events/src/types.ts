import { Events } from "./events";

type ConstructorParams = {
  eventName: Events;
  payload?: Object;
};

export interface IDomainEvent {
  eventName: Events;
  payload?: Object;
  toPrimitive(): Object;
}

export class DomainEvent implements IDomainEvent {
  readonly id: string;
  readonly eventName: Events;
  readonly ocurredOn: Date;
  readonly payload?: Object;

  constructor({ eventName, payload }: ConstructorParams) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.payload = payload;
    this.eventName = eventName;
    this.ocurredOn = new Date();
  }

  toPrimitive(): Object {
    return {
      eventName: this.eventName,
      ocurredOn: this.ocurredOn,
      payload: this.payload,
    };
  }
}

export type CallbackEvent = (event: DomainEvent) => void;
