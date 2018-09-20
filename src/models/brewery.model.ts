export class Brewery {
  private _name: string;
  private _city: string;
  private _state: string;
  private _logoUrl: string;
  private _gypsy: boolean;

  get name(): string {
    return this._name;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get logoUrl(): string {
    return this._logoUrl;
  }

  get gypsy(): boolean {
    return this._gypsy;
  }

  set name(name: string) {
    this._name = name;
  }

  set city(city: string) {
    this._city = city;
  }

  set state(state: string) {
    this._state = state;
  }

  set logoUrl(logoUrl: string) {
    this._logoUrl = logoUrl;
  }

  set gypsy(value: boolean) {
    this._gypsy = value;
  }  
}