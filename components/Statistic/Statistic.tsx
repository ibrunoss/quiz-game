import styles from "./Statistic.module.css";

interface StatisticProps {
  text: string;
  value: string | number;
  background?: string;
  fontColor?: string;
}
const Statistic: React.FC<StatisticProps> = (props) => {
  const { background, fontColor, text, value } = props;
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: background ?? "#FDD60F",
          color: fontColor ?? "#FFFFFF",
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statistic;
