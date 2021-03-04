import { Button } from "@material-ui/core";
import React from "react";

export default function GameHeader(props) {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>Current tries:{props.tries}</div>
      <div>Best:{props.best}</div>
      <Button variant="outlined" onClick={props.newGame}>
        Restart
      </Button>
    </div>
  );
}
