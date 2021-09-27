import QuestionModel from "../../model/question";
import Button from "../Button/Button";
import Question from "../Question/Question";

import styles from "./Quiz.module.css";

interface QuizProps {
  question: QuestionModel;
  onResponse: (question: QuestionModel) => void;
  timeOut: () => void;
}

const Quiz: React.FC<QuizProps> = (props) => {
  const { question, onResponse, timeOut } = props;

  const answered = (index: number) => {
    if (question.notAnswered) {
      onResponse(question.click(index));
    }
  };

  return (
    <div className={styles.quiz}>
      {question && (
        <Question onResponse={answered} timeOut={timeOut} value={question} />
      )}

      <Button href="/result" text="Resultado" />
    </div>
  );
};

export default Quiz;
