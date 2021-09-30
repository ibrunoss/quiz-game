import { useRouter, NextRouter } from "next/router";
import Button from "../components/Button/Button";
import Statistic from "../components/Statistic/Statistic";

import styles from "../styles/result.module.css";

interface ResultInterface extends NextRouter {
  query: { w: string; c: string; t: string };
}

export default function Result() {
  const router = useRouter() as ResultInterface;
  const wrong = +router.query.w || 0;
  const correct = +router.query.c || 0;
  const total = +router.query.t || 0;
  const hitPercentage = Math.round((correct / total) * 100);

  console.log(hitPercentage);
  return (
    <div className={styles.result}>
      <h1>Resultado</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Statistic
          text={total > 1 ? "Perguntas" : "Pergunta"}
          value={total}
          background="#483891"
        />
        <Statistic text="Aproveitamento" value={`${hitPercentage}%`} />
        <Statistic
          text={correct > 1 ? "Acertos" : "Acerto"}
          value={correct}
          background="#9CD2A4"
        />
        <Statistic
          text={wrong > 1 ? "Erros" : "Erro"}
          value={wrong}
          background="#DE6A63"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button href="/" text="Tentar Novamente" />
      </div>
    </div>
  );
}
