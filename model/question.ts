import AlternativeModel, { AlternativeModelInterface } from "./alternative";
import sort from "../function/sort";

export interface QuestionModelInterface {
  id: number;
  statement: string;
  alternatives: AlternativeModelInterface[];
  answered: boolean;
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

  click(index: number): QuestionModel {
    const gotRight = this.#alternatives[index].right;
    const alternatives = this.#alternatives.map((alternative, i) =>
      index === i ? alternative.click() : alternative
    );

    return new QuestionModel(this.id, this.statement, alternatives, gotRight);
  }

  sortAlternatives(): QuestionModel {
    const alternatives: AlternativeModel[] = sort(this.#alternatives);

    return new QuestionModel(
      this.#id,
      this.#statement,
      alternatives,
      this.#gotRight
    );
  }

  toObject(): QuestionModelInterface {
    return {
      id: this.#id,
      statement: this.#statement,
      alternatives: this.alternatives.map((alternative) =>
        alternative.toObject()
      ),
      answered: this.answered,
      gotRight: this.#gotRight,
    };
  }
}
