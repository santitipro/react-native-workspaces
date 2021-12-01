import { Events } from "./events";
import { CallbackEvent, IDomainEvent } from "./types";

export interface EventBus {
  publish<T extends IDomainEvent>(event: T): void;
  subscribe<T extends IDomainEvent>(eventName: Events, callback: CallbackEvent<T>): void;
  unsubscribe<T extends IDomainEvent>(eventName: Events, callback: CallbackEvent<T>): void;
}
