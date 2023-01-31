import style from "./style.module.css";

export function Image(props) {
  return <img src={props.src} className={style.image} />;
}
