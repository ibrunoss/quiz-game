export default class AlternativeModel {
  #value: string;
  #clicked: boolean;
  #right: boolean;

  constructor(value: string, right: boolean, clicked: boolean = false) {
    this.#value = value;
    this.#clicked = clicked;
    this.#right = right;
  }

  static correct(value: string) {
    return new AlternativeModel(value, true);
  }

  static wrong(value: string) {
    return new AlternativeModel(value, false);
  }

  get value() {
    return this.#value;
  }
  get clicked() {
    return this.#clicked;
  }
  get right() {
    return this.#right;
  }
}
