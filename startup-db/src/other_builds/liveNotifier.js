const CreationEvent = {
  System: 'system',
  Created: 'created'
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    // Simulate chat messages that will eventually come over WebSocket
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = () => this.broadcastEvent('system', CreationEvent('system', CreationEvent.System, {}));
    this.socket.onmessage = (event) => this.handleSocketMessage(event);
    this.socket.onclose = () => this.broadcastEvent('system', CreationEvent.System, {});
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { CreationEvent, GameNotifier };
