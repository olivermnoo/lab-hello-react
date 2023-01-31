import style from "./style.module.css";

export function Title(props) {
  return <p className={style.title}>{props.content}</p>;
}
