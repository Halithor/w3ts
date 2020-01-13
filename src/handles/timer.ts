/** @noSelfInFile **/

import { Handle } from "./handle";

export class Timer extends Handle<timer> {

  constructor() {
    super(Handle.initFromHandle() ? undefined : CreateTimer());
  }

  public start(timeout: number, periodic: boolean, handlerFunc: () => void) {
    TimerStart(this.handle, timeout, periodic, handlerFunc);
    return this;
  }

  public pause() {
    PauseTimer(this.handle);
    return this;
  }

  public resume() {
    ResumeTimer(this.handle);
    return this;
  }

  public destroy() {
    DestroyTimer(this.handle);
    return this;
  }

  public get elapsed(): number {
    return TimerGetElapsed(this.handle);
  }

  public get remaining(): number {
    return TimerGetRemaining(this.handle);
  }

  public get timeout(): number {
    return TimerGetTimeout(this.handle);
  }

  public static fromHandle(handle: timer): Timer {
    return this.getObject(handle);
  }

  public static fromExpired(): Timer {
    return this.fromHandle(GetExpiredTimer());
  }
}
