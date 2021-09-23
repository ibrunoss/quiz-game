import { NextApiRequest, NextApiResponse } from "next";

import questions from "../../data/questions";
import sort from "../../function/sort";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const questionsId = questions.map((question) => question.id);

  res.status(200).json(sort(questionsId));
};
