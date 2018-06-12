export class Stream {

  private id: number;

  // private _user: User;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get _id(): number {
    return this.id;
  }

  public set _id(n: number) {
    this.id = n;
  }

}
