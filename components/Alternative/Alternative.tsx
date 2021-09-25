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
  return (
    <div className={styles.alternative} onClick={() => onResponse(id)}>
      <div className={styles.content}>
        <div className={styles.front}>
          <div className={styles.letter} style={{ backgroundColor }}>
            {letter}
          </div>
          <div className={styles.text}>{alternative.value}</div>
        </div>

        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Alternative;
