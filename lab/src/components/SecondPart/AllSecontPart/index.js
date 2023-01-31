import style from "./style.module.css";
import { Image } from "../Image";
import { Subtitle } from "../Subtitle";
import { Title } from "../Title";

export function AllSecondPart() {
  return (
    <div className={style.allSecondPart}>
      <div className={style.card}>
        <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" />
        <Title content="Declarative" />
        <Subtitle content="React makes it painless to create interative Uls." />
      </div>
      <div className={style.card}>
        <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" />
        <Title content="Components" />
        <Subtitle content="Build encapuslated components that manage their state." />
      </div>
      <div className={style.card}>
        <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" />
        <Title content="Single-Way" />
        <Subtitle content="A set immutable values are passed to the component`s." />
      </div>
      <div className={style.card}>
        <Image src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" />
        <Title content="JSX" />
        <Subtitle content="Statycally-typed, designed to run on modern browsers." />
      </div>
    </div>
  );
}
