import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { Button } from "../Button";
import style from "./style.module.css";
import { Navbar } from "../../Navbar";

export function AllFirstPart() {
  return (
    <div className={style.allFirstPart}>
      <Navbar />
      <div className={style.content}>
        {/* {" "} */}
        <Title />
        <Subtitle />
        <Button />
      </div>
    </div>
  );
}
