import { Events } from "./events";
import { CallbackEvent, IDomainEvent } from "./types";

export interface EventBus {
  publish<T extends IDomainEvent>(event: T): void;
  subscribe(eventName: Events, callback: CallbackEvent): void;
  unsubscribe(eventName: Events, callback: CallbackEvent): void;
}
