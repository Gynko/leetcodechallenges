import { useState } from "react";
import HeaderDesktop from "../components/headerDesktop/headerDesktop.component";
import HeaderMobile from "../components/headermobile/headerMobile.component";
import TwoSum from "./Challenges/TwoSum/TwoSum.page";

function Home() {
  const [difficulty, setDifficulty] = useState("");

  return (
    <div>
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
}

export default Home;
