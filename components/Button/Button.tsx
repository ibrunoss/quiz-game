import Link from "next/link";

import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { href, text } = props;
  return (
    <Link href={href} passHref>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default Button;
