import style from "./style.module.css";

export function Subtitle(props) {
  return <p className={style.subtitle}>{props.content}</p>;
}
