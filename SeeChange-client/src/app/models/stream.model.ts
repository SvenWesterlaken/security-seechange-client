export class Stream {

  private id: string;
  private _connectedOn: Date;
  private _duration: number;
  private _viewers: number;

  // private _user: User;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get streamName(): string {
    return this.id;
  }

  public get duration(): number {
    return (this._duration / 60);
  }

  public get connectedOn(): Date{
    return this._connectedOn;
  }

  public get viewers(): number {
    return this._viewers;
  }
//

}
