import AlternativeModel from "./alternative";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #alternatives: AlternativeModel[];
  #gotRight: boolean;

  constructor(
    id: number,
    statement: string,
    alternatives: AlternativeModel[],
    gotRight: boolean
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#alternatives = alternatives;
    this.#gotRight = gotRight;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get alternatives() {
    return this.#alternatives;
  }

  get gotRight() {
    return this.#gotRight;
  }
}
