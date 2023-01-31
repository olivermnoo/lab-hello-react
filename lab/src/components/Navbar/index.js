import style from "./style.module.css";

export function Navbar() {
  return (
    <div className={style.navbar}>
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" />
      <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" />
    </div>
  );
}
