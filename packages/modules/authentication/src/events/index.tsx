import { DomainEvent, Events } from "@eccco/events";

type ConstructorParams = {
  id: string;
  email: string;
};

export class UserLoggedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = Events.USER_LOGGED;

  readonly id: string;
  readonly email: string;

  constructor({ id, email }: ConstructorParams) {
    super(UserLoggedDomainEvent.EVENT_NAME);
    this.id = id;
    this.email = email;
  }

  toPrimitive(): Object {
    return {
      id: this.id,
      email: this.email,
    };
  }
}
