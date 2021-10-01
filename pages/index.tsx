import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Quiz from "../components/Quiz/Quiz";
import QuestionModel, { QuestionModelInterface } from "../model/question";

const baseURL = (endpoint: string = "") => `/api${endpoint}`;

const Home: NextPage = () => {
  const [question, setQuestion] = useState<QuestionModel>();
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);

  const router = useRouter();

  const questionRef = useRef<QuestionModel>();

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  const getQuestionsIds = async () => {
    const resp = await fetch(baseURL("/quiz"));
    const ids: number[] = await resp.json();

    setQuestionsIds(ids);
  };

  const getQuestion = async (questionId: number) => {
    const resp = await fetch(baseURL(`/questions/${questionId}`));
    const question: QuestionModelInterface = await resp.json();

    setQuestion(QuestionModel.makeNew(question));
  };

  useEffect(() => {
    getQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && getQuestion(questionsIds[0]);
  }, [questionsIds]);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const nextQuestionId = (): number | undefined => {
    if (!question) {
      return;
    }

    const nextIndex = questionsIds.indexOf(question.id) + 1;

    return questionsIds[nextIndex];
  };

  const nextStep = () => {
    setTimeout(() => {
      const nextIndex = nextQuestionId();

      nextIndex ? getQuestion(nextIndex) : finish();
    }, 900);
  };

  const finish = () =>
    router.push({
      pathname: "/result",
      query: {
        c: correctAnswerCount,
        w: wrongAnswerCount,
        t: correctAnswerCount + wrongAnswerCount,
      },
    });

  const onResponse = (question: QuestionModel) => {
    question.gotRight
      ? setCorrectAnswerCount(correctAnswerCount + 1)
      : setWrongAnswerCount(wrongAnswerCount + 1);

    setQuestion(question);

    nextStep();
  };

  const timeOut = () => {
    const question = questionRef.current;

    if (question?.notAnswered) {
      setWrongAnswerCount(wrongAnswerCount + 1);
    }

    nextStep();
  };

  return question ? (
    <Quiz question={question} onResponse={onResponse} timeOut={timeOut} />
  ) : (
    <div>Loading...</div>
  );
};

export default Home;
