import { Injectable } from '@angular/core';

import { UI } from './../model/UI';

@Injectable()
export class MessageService {
  messages: UI.Message[] = [];

  add(level: UI.MessageLevel, text: string) {
    const message: UI.Message = {
      level: level,
      text: text
    };
    this.messages.push(message);
  }

  clear() {
    this.messages.length = 0;
  }
}
