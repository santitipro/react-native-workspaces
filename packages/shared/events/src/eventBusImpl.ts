import * as events from "events";
import { Events } from "./events";
import { EventBus } from "./eventBus";
import { CallbackEvent, IDomainEvent } from "./types";

class EventBusImpl implements EventBus {
  eventBus: events.EventEmitter;

  constructor() {
    this.eventBus = new events.EventEmitter();
  }

  subscribe(eventName: Events, callback: CallbackEvent): void {
    this.eventBus.on(eventName, callback);
  }

  publish<T extends IDomainEvent>(event: T): void {
    this.eventBus.emit(event.eventName, event);
  }

  unsubscribe(eventName: Events, callback: CallbackEvent): void {
    this.eventBus.removeListener(eventName, callback);
  }
}

export default new EventBusImpl();
