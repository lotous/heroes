import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[] = [];

  constructor() { }

  log(message: string): void  {
    this.messages.push(message);
  }

  clearLog(): void {
    this.messages = [];
  }

}
