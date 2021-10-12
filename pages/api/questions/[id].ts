import { NextApiRequest, NextApiResponse } from "next";

import questions from "../../../data/questions";
import { QuestionModelInterface } from "../../../model/question";

const QuizID = (req: NextApiRequest, res: NextApiResponse) => {
  const questionId = +req.query.id;
  const filteredQuestion = questions.filter(
    (question) => question.id === questionId
  );

  const question: QuestionModelInterface | false = filteredQuestion[0]
    ? filteredQuestion[0].sortAlternatives().toObject()
    : false;

  if (question) {
    res.status(200).json(question);
  }

  res.status(204).send(undefined);
};

export default QuizID;
