import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Timer.module.css";

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = (props) => {
  const { duration, onComplete } = props;
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={duration}
        onComplete={onComplete}
        size={120}
        isPlaying
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
