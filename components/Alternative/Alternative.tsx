import styles from "./Alternative.module.css";
import AlternativeModel from "../../model/alternative";

interface AlternativeProps {
  value: AlternativeModel;
  index: number;
  letter: string;
  letterBg: string;
  onResponse: (index: number) => void;
}

const Alternative: React.FC<AlternativeProps> = (props) => {
  const {
    value: alternative,
    index: id,
    letter,
    letterBg: backgroundColor,
    onResponse,
  } = props;

  const renderCorrectAlternative = () => (
    <div className={styles.correct}>
      <div>Resposta correta</div>
      <div className={styles.text}>{alternative.value}</div>
    </div>
  );

  const renderWrongAlternative = () => (
    <div className={styles.wrong}>
      <div>Resposta errada</div>
      <div className={styles.text}>{alternative.value}</div>
    </div>
  );

  return (
    <div className={styles.alternative} onClick={() => onResponse(id)}>
      <div className={styles.content}>
        {alternative.clicked ? (
          <div className={styles.back}>
            {alternative.right
              ? renderCorrectAlternative()
              : renderWrongAlternative()}
          </div>
        ) : (
          <div className={styles.front}>
            <div className={styles.letter} style={{ backgroundColor }}>
              {letter}
            </div>
            <div className={styles.text}>{alternative.value}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alternative;
