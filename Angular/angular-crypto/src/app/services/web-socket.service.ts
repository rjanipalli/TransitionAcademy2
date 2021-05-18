import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  //binance

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('');
  }
}
