import EventEmitter from "eventemitter3";

class Emitter {
  private eventEmitter: EventEmitter;

  private constructor() {
    this.eventEmitter = new EventEmitter();
  }

  on(event: string, fn: (...args: any[]) => void): void {
    this.eventEmitter.on(event, fn);
  }

  once(event: string, fn: (...args: any[]) => void): void {
    this.eventEmitter.once(event, fn);
  }

  off(event: string, fn: (...args: any[]) => void): void {
    this.eventEmitter.off(event, fn);
  }

  removeAllListeners(event?: string): void {
    this.eventEmitter.removeAllListeners(event);
  }

  emit(event: string, ...args: any[]): void {
    this.eventEmitter.emit(event, ...args);
  }
}

export default Emitter;
