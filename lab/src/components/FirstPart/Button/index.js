import style from "./style.module.css";

export function Button() {
  return <button className={style.button}>Awesome!</button>;
}
// é necessário colocar export pois puxaremos esse arquivo no index.js
// o nome do component precisa de sempre começar com letra maiuscula, para dar erro com a própria tag button
