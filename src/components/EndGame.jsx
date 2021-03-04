import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

export default function EndGame(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{props.best ? "Game Ended!" : "Start Game"}</h1>
      <div>Deck Size</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={props.deckSize}
            onChange={props.setSize}
            label="Age"
          >
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
            <MenuItem value={7}>Seven</MenuItem>
            <MenuItem value={8}>Eight</MenuItem>
            <MenuItem value={9}>Nine</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.newGame()}
        >
          New Game
        </Button>
      </div>
    </div>
  );
}
