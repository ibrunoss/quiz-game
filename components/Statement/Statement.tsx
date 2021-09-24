import styles from "./Statement.module.css";

interface StatementInterface {
  text: string;
}

const Statement: React.FC<StatementInterface> = (props) => {
  const { text } = props;
  return (
    <div className={styles.statement}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statement;
