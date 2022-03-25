import { Service } from "typedi";
import {
  ButtonReplyMessage,
  EventMessage,
  ImageMessage,
  ListReplyMessage,
  TextMessage,
  WebhookEvent,
} from "../types";

@Service()
export class EventHandler {
  constructor() {}

  public async handleEvent(event: WebhookEvent) {
    if (!event.messages) return;

    const messageWithProfile: EventMessage[] = event.messages.map(
      (item, i) => ({
        ...item,
        contact: event.contacts[i],
      })
    );

    Promise.all(
      messageWithProfile.map((message) => this._handleMessage(message))
    );
  }

  private async _handleMessage(event: EventMessage) {
    console.log(event);
  }
}
