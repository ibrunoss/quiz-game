import styles from "./Question.module.css";
import QuestionModel from "../../model/question";
import Statement from "../Statement/Statement";
import Alternative from "../Alternative/Alternative";

interface QuestionProps {
  value: QuestionModel;
}

const Question: React.FC<QuestionProps> = (props) => {
  const { value: question } = props;

  const letters = [
    {
      value: "A",
      color: "#F2C866",
    },
    {
      value: "B",
      color: "#F266BA",
    },
    {
      value: "C",
      color: "#85D4F2",
    },
    {
      value: "D",
      color: "#BCE596",
    },
  ];

  const renderAlternatives = () =>
    question.alternatives.map((alternative, i) => (
      <Alternative
        value={alternative}
        letter={letters[i].value}
        index={i}
        key={`${i}_${alternative.value}`}
        letterBg={letters[i].color}
      />
    ));

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      {renderAlternatives()}
    </div>
  );
};

export default Question;
