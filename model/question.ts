import AlternativeModel, { AlternativeModelInterface } from "./alternative";
import sort from "../function/sort";

export interface QuestionModelInterface {
  id: number;
  statement: string;
  alternatives: AlternativeModelInterface[];
  answered: boolean;
  gotRight: boolean;
  timeIsUp: boolean;
}
export default class QuestionModel {
  #id: number;
  #statement: string;
  #alternatives: AlternativeModel[];
  #gotRight: boolean;
  #timeIsUp: boolean;

  constructor(
    id: number,
    statement: string,
    alternatives: AlternativeModel[],
    gotRight: boolean = false,
    timeIsUp: boolean = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#alternatives = alternatives;
    this.#gotRight = gotRight;
    this.#timeIsUp = timeIsUp;
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
    if (this.#timeIsUp) {
      return true;
    }

    const reducer = (acc: boolean, cur: AlternativeModel): boolean =>
      cur.clicked ? true : acc;

    return this.alternatives.reduce(reducer, false);
  }

  get notAnswered(): boolean {
    return !this.answered;
  }

  click(index: number): QuestionModel {
    const gotRight = this.#alternatives[index]?.right;
    const timeIsUp = index === -1;
    const alternatives = this.#alternatives.map((alternative, i) =>
      index === i ? alternative.click() : alternative
    );

    return new QuestionModel(
      this.id,
      this.statement,
      alternatives,
      gotRight,
      timeIsUp
    );
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

  static makeNew(object: QuestionModelInterface): QuestionModel {
    const alternatives = object.alternatives.map((alternative) =>
      AlternativeModel.makeNew(alternative)
    );
    return new QuestionModel(
      object.id,
      object.statement,
      alternatives,
      object.gotRight,
      object.timeIsUp
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
      timeIsUp: this.#timeIsUp,
    };
  }
}
