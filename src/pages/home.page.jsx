import { useState } from "react";
import HeaderMobile from "../components/headermobile/headerMobile.component";
import TwoSum from "./Challenges/TwoSum/TwoSum.page";

function Home() {
  const [difficulty, setDifficulty] = useState("");

  return (
    <div>
      <HeaderMobile />
    </div>
  );
}

export default Home;
