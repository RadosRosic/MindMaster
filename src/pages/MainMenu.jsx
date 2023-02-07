import React, { useContext } from "react";
import CombinationContext from "../context/combination-context";

import Button from "../components/atoms/Button";

const MainMenu = () => {
  const ctx = useContext(CombinationContext);
  return (
    <main className="main-menu">
      <div className="main-menu_wrapper">
        <h1 className="main-menu_title">
          <span>Mind</span> <span>Master</span>
        </h1>
        <Button
          shape="rectangle"
          text="Play"
          color="primary"
          icon="sports_esports"
          onClick={ctx.playGame}
        />
        <Button
          shape="rectangle"
          text="How to play"
          color="secondary"
          icon="psychology_alt"
          // onClick={tutorial} add this
        />
      </div>
    </main>
  );
};

export default MainMenu;
