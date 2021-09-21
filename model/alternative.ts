export default class AlternativeModel {
  #value: string;
  #clicked: boolean;
  #right: boolean;

  constructor(value: string, clicked: boolean, right: boolean) {
    this.#value = value;
    this.#clicked = clicked;
    this.#right = right;
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
