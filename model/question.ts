import AlternativeModel, { AlternativeModelInterface } from "./alternative";

export interface QuestionModelInterface {
  id: number;
  statement: string;
  alternatives: AlternativeModelInterface[];
  gotRight: boolean;
}
export default class QuestionModel {
  #id: number;
  #statement: string;
  #alternatives: AlternativeModel[];
  #gotRight: boolean;

  constructor(
    id: number,
    statement: string,
    alternatives: AlternativeModel[],
    gotRight: boolean = false
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

  get answered(): boolean {
    const reducer = (acc: boolean, cur: AlternativeModel): boolean =>
      cur.clicked ? true : acc;

    return this.alternatives.reduce(reducer, false);
  }

  toObject(): QuestionModelInterface {
    return {
      id: this.#id,
      statement: this.#statement,
      alternatives: this.alternatives.map((alternative) =>
        alternative.toObject()
      ),
      gotRight: this.#gotRight,
    };
  }
}
